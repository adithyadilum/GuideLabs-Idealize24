import React, { useState, useEffect } from "react";
import styles from "./css/Result.module.css";
import careerData from "./Data/careerData.js";
import Slider from "react-slick";

function Result() {
    const [showResults, setShowResults] = useState(false);
    const [selectedCareerIds, setSelectedCareerIds] = useState([1, 2]); // Example IDs of selected careers

    const handleShowResults = () => {
        setShowResults(true);
    };


    const handleManualEntry = () => {
        const userInput = prompt("Enter career ID (e.g., 1, 2, 3):");
        if (userInput) {
            const ids = userInput.split(",").map(id => parseInt(id.trim(), 10));
            setSelectedCareerIds(ids);
        }
    };
    // Filter the career data to include only the selected careers
    const selectedCareers = careerData.filter(career => selectedCareerIds.includes(career.id));

    useEffect(() => {
        let latestScrollY = 0;
        let ticking = false;

        const handleScroll = () => {
            latestScrollY = window.scrollY;
            requestTick();
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        };

        const update = () => {
            const parallaxElement = document.getElementById(styles.stripes);
            if (parallaxElement) {
                parallaxElement.style.transform = `translateY(${latestScrollY * 0.7}px)`;
            }
            ticking = false;
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: Math.min(3, selectedCareers.length),
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(2, selectedCareers.length),
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: Math.min(1, selectedCareers.length),
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div id={styles.stripes}>
                    <img src="src\assets\bgResult.svg" alt="" srcset="" />
                </div>
                <h1 className={styles.title}>Your Career Recommendations</h1>
                <p className={styles.description}>Based on your answers, here are some careers that might be a great fit for you!</p>
                <button type="button" className={styles.btnShowResult} onClick={handleShowResults}>Show</button>
                <button type="button" className={styles.btnShowResult} onClick={handleManualEntry}>Enter ID Manually</button>


                {showResults && (
                    <Slider {...settings} className={styles.cardWrapper}>
                        {selectedCareers.map((career, index) => (
                            <div key={index} className={`${styles.card} ${selectedCareerIds.includes(career.id) ? styles.selected : ''}`}>
                                <h2 className={styles.cardTitle}>{career.title}</h2>
                                <p className={styles.cardDescription}>{career.description}</p>
                                <div className={styles.cardContent}>
                                    <ul className={styles.cardList}>
                                        <li><strong>Skills Required:</strong> {career.keySkills.join(", ")}</li>
                                        <li><strong>Salary Range:</strong> {career.salaryRange}</li>
                                        <li><strong>Job Outlook:</strong> {career.jobOutlook}</li>
                                    </ul>
                                    <a href={career.learnMoreLink} className={styles.learnMoreLink} target="_blank" rel="noopener noreferrer">Learn More</a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
        </div>
    );
}

export default Result;