import React, { useState } from "react";
import styles from './css/QuestionSet1.module.css';
import questions from './Data/questionSet1.js';

function QuestionSet1() {
    const [currentPage, setCurrentPage] = useState(0);
    const questionsPerPage = 5;
    const totalPages = Math.ceil(questions.length / questionsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            // Handle show results or end of questions logic
        }
    };

    const handleBack = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const currentQuestions = questions.slice(
        currentPage * questionsPerPage,
        (currentPage + 1) * questionsPerPage
    );

    return (
        <div className={styles.wrapper}>
            <img src="src/assets/rainbow-vortex.svg" alt="" />
            <div className={styles.container2Wrapper}>
                <h2 className={styles.qCardh2}>
                    Rate your interest in each activity on a scale from 1 to 5 (1 = Not Interested,
                    5 = Very Interested).
                </h2>
                {currentQuestions.map((question, index) => (
                    <div key={question.id} className={styles.container2}>
                        <div className={styles.grid}>
                            <div className={styles.qCardh3}>{currentPage * questionsPerPage + index + 1} - {question.text}</div>
                            <div className={styles.btnGroup}>
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <button key={num} className={styles.btnAnswer}>
                                        {num}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <div className={styles.btnNavGroup}>
                    <button
                        type="button"
                        className={`${styles.btn} ${styles.btnNav}`}
                        onClick={handleBack}
                        disabled={currentPage === 0}
                    >
                        Back
                    </button>
                    <button
                        type="button"
                        className={`${styles.btn} ${styles.btnSubmit}`}
                        onClick={handleNext}
                    >
                        {currentPage === totalPages - 1 ? "Show Results" : "Next"}
                    </button>
                </div>
                <div className={styles.progressContainer}>
                    <div
                        className={styles.progressBar}
                        style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default QuestionSet1;
