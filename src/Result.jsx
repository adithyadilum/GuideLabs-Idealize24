import React, { useState, useEffect } from "react";
import styles from "./css/Result.module.css";
import careerFields from "./Data/careerData_IT.js";
import Slider from "react-slick";

function Result({ selectedFieldId }) {
    const [selectedCareers, setSelectedCareers] = useState([]);
    const [learnMoreContent, setLearnMoreContent] = useState(null);

    useEffect(() => {
        // Filter the career data to include only the selected field's careers
        const field = careerFields.find(career => career.fieldId === selectedFieldId);
        if (field) {
            setSelectedCareers(field.jobs);
        }
    }, [selectedFieldId]);

    const handleLearnMore = (career) => {
        setLearnMoreContent(career);
    };

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
        <>
            <div className={styles.stripes}>
                <img src="src/assets/resultBg.svg" alt="Background" />
            </div>
            <div className={styles.chevron}></div>
            <div className={styles.illustration}>
                <img src="src/assets/Website designer-pana.svg" alt="Illustration" />
            </div>

            {learnMoreContent ? (
                <div className={styles.learnMoreContainer}>
                    <h2 className={styles.learnMoreTitle}>{learnMoreContent.title}</h2>
                    <p className={styles.learnMoreDescription}>{learnMoreContent.description}</p>
                    <p><strong>Salary Range:</strong> {learnMoreContent.salaryRange}</p>
                    <button type="button" onClick={() => setLearnMoreContent(null)}>Back</button>
                </div>
            ) : (
                <>
                    <div className={styles.container}>
                        <div className={styles.wrapper}>
                            <p className={styles.description}>Based on your responses, it seems you have a passion for</p>
                            <h2 className={styles.title}>{careerFields.find(career => career.fieldId === selectedFieldId)?.field}</h2>
                            <p className={styles.description}>Here are some exciting career paths you might want to explore...</p>
                        </div>
                    </div>
                    <div className={styles.cardContainer}>
                        <Slider {...settings} className={styles.cardWrapper}>
                            {selectedCareers.map((career, index) => (
                                <div key={index} className={styles.card}>
                                    <h2 className={styles.cardTitle}>{career.title}</h2>
                                    <div className={styles.cardContent}>
                                        <p className={styles.cardDescription}>{career.description}</p>
                                        <p className={styles.cardDescription}><strong>Salary Range:</strong> {career.salaryRange}</p>
                                        <button
                                            id={career.btnID}
                                            type="button"
                                            className={styles.learnMoreBtn}
                                            onClick={() => handleLearnMore(career)}>
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </>
            )}
        </>
    );
}

export default Result;
