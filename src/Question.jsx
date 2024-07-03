import React from "react";
import styles from './Question.module.css';


function Question() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container1}>
                <h2 className={styles.qCardh2}>Question 1</h2>
                <h3 className={styles.qCardh3}>Do you enjoy identifying and solving complex problems through systematic analysis and experimentation?</h3>
                <div className={styles.grid}>
                    <button className={`${styles.btn} ${styles.btnAnswer}`} type="button">Answer 2</button>
                    <button className={`${styles.btn} ${styles.btnAnswer}`} type="button">Answer 1</button>
                    <button className={`${styles.btn} ${styles.btnAnswer}`} type="button">Answer 2</button>
                </div>
                <button type="submit" className={`${styles.btn} ${styles.btnSubmit}`}>Next </button>
            </div>

        </div>
    );
}

export default Question;