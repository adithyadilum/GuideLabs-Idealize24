import React from "react";
import styles from "./Result.module.css";
import careerData from "./careerData";

function Result() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div id={styles.stripes}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h1 className={styles.title}>Your Career Recommendations</h1>
                <p className={styles.description}>Based on your answers, here are some careers that might be a great fit for you!</p>
                <button type="button" className={styles.btnShowResult}>Show</button>
            </div>

            <div className={styles.cardWrapper}>
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}></h2>
                    <p className={styles.cardDescription}>Software developers are the creative minds behind computer programs. Some develop the applications that allow people to do specific tasks on a computer or another device. Others develop the underlying systems that run the devices or that control networks.</p>
                    <div className={styles.cardContent}>
                        <ul className={styles.cardList}>
                            <li>Skills Required: Bachelor's degree</li>
                            <li>Median Salary: $105,590</li>
                            <li>Job Outlook: 22% (Much faster than average)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;