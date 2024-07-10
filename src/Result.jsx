import React, { useState, useEffect } from "react";
import styles from "./css/Result.module.css";
import careerFields from "./Data/careerData_IT.js";
import learnMoreData_IT from "./Data/learnMoreData_IT.js";
import Slider from "react-slick";
import Footer from "./Footer.jsx";

function Result({ selectedFieldId }) {
    const [selectedCareers, setSelectedCareers] = useState([]);
    const [learnMoreContent, setLearnMoreContent] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Filter the career data to include only the selected field's careers
        const field = careerFields.find(career => career.fieldId === selectedFieldId);
        if (field) {
            setSelectedCareers(field.jobs);
        }
    }, [selectedFieldId]);

    const handleLearnMore = (career) => {
        const learnMoreData = learnMoreData_IT.find(data => data.btnID === career.btnID);
        if (learnMoreData) {
            setIsTransitioning(true);
            setTimeout(() => {
                setLearnMoreContent(learnMoreData.content[0]);
                setIsTransitioning(false);
            }, 500); // Ensure this duration matches the CSS transition duration
        }
    };

    const handleBack = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setLearnMoreContent(null);
            setIsTransitioning(false);
        }, 500); // Ensure this duration matches the CSS transition duration
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
                <div className={styles.learnMoreWrapper}>
                    <div className={`${styles.learnMoreContainer} ${isTransitioning ? styles.transitioning : ''} ${learnMoreContent ? styles.active : ''}`}>
                        <button type="button" className={styles.learnMoreBackBtn} onClick={handleBack}>⇐</button>
                        <div className={styles.learnMoreTitleContainer}>
                            <h3 className={styles.learnMoreTitle}>{learnMoreContent.title}</h3>
                            <p className={styles.learnMoreDescription}>{learnMoreContent.description}</p>
                        </div>
                        <div className={styles.learnMoreContentContainer}>
                            <h3 className={styles.learnMoreskills}>Required Skills and Qualifications</h3>
                            <ul className={styles.learnMoreSkillList}>
                                <li>Technical Skills
                                    <ul className={styles.learnMoreList}>
                                        {learnMoreContent.skills[0].technicalSkills.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                </li>
                                <li>Soft Skills
                                    <ul className={styles.learnMoreList}>
                                        {learnMoreContent.skills[0].softSkills.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                </li>
                                <li>
                                    Educational Qualifications:
                                    <ul className={styles.learnMoreList}>
                                        {learnMoreContent.skills[0].educationalRequirements.map((requirement, index) => (
                                            <li key={index}>{requirement}</li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.learnMoreContentContainer}>
                            <h3 className={styles.learnMoreCareerPath}>Career Path and Progression:</h3>
                            <ul className={styles.learnMoreList}>
                                {learnMoreContent.careerPath.map((path, index) => (
                                    <li key={index}>{path}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.learnMoreContentContainer}>
                            <h3 className={styles.learnMoreCareerPath}>Salary Expectations:</h3>
                            <ul className={styles.learnMoreList}>
                                {learnMoreContent.salary.map((salary, index) => (
                                    <li key={index}>{salary}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.learnMoreContentContainer}>
                            <h3 className={styles.learnMoreCareerPath}>Job Market in Sri Lanka:</h3>
                            <ul className={styles.learnMoreList}>
                                {learnMoreContent.jobMarketLocal.map((market, index) => (
                                    <li key={index}>{market}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.learnMoreContentContainer}>
                            <h3 className={styles.learnMoreCareerPath}>International Job Market:</h3>
                            <ul className={styles.learnMoreList}>
                                {learnMoreContent.jobMarketGlobal.map((market, index) => (
                                    <li key={index}>{market}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.learnMoreContentContainer}>
                            <h3 className={styles.learnMoreCareerPath}>How Sri Lankan Students Can Access International Job Markets: </h3>
                            <ul className={styles.learnMoreList}>
                                {learnMoreContent.accessJobMarket.map((access, index) => (
                                    <li key={index}>{access}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.learnMoreContentContainer}>
                            <h3 className={styles.learnMoreCareerPath}>Work Environment:</h3>
                            <ul className={styles.learnMoreList}>
                                {learnMoreContent.workEnvironment.map((environment, index) => (
                                    <li key={index}>{environment}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.learnMoreContentContainer}>
                            <h3 className={styles.learnMoreCareerPath}>Future Trends:</h3>
                            <ul className={styles.learnMoreList}>
                                {learnMoreContent.futureTrends.map((trend, index) => (
                                    <li key={index}>{trend}</li>
                                ))}
                            </ul>
                        </div>
                        <button type="button" className={styles.learnMoreBackBtnBelow} onClick={handleBack}>⇐</button>
                    </div>
                </div>
            ) : (
                <>
                    <div className={styles.container}>
                        <div className={styles.wrapperTitle}>
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
                                    <p className={styles.cardDescription}>{career.description}</p>
                                    <div className={styles.cardContent}>
                                        <p className={styles.cardSalaryRange}><strong>{career.salaryRange}</strong> </p>
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
            <div className={styles.mortivationalQuoteWrapper}>
                <div className={styles.mortivationalQuoteContainer}>
                    <p className={styles.mortivationalQuoteHead}>
                        Where Dreams Meet Direction
                    </p>
                    <p className={styles.mortivationalQuoteP} >
                        You've got the world at your fingertips, don't just reach out-grab it! With the right career, the sky's no longer the limit, it's the destination. So saddle up, it's time to conquer those stars.
                    </p>
                </div>
                <button type="button" className={styles.backBtn}>Back to Home</button>
            </div>

            <Footer />
        </>
    );
}

export default Result;
