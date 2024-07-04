import React, { useState } from "react";
import styles from './css/Question.module.css';
import RadioButtonGroup from './RadioButtonGroup.jsx';
import questions from './Data/questionData_IT.js';
import Results from './Result.jsx';

function Question() {
    const [currentPage, setCurrentPage] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const handleNext = () => {
        if (currentPage < questions.length - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            setShowResults(true);
        }
    };

    if (showResults) {
        return <Results />;
    }

    const currentQuestion = questions[currentPage];

    return (
        <div className={styles.wrapper}>
            {currentQuestion.type === 'single' ? (
                <div className={styles.container1}>
                    <h2 className={styles.qCardh2}>Question {currentPage + 1} - {currentQuestion.category}</h2>
                    <h3 className={styles.qCardh3}>{currentQuestion.text}</h3>
                    <div className={styles.btnGroup}>
                        {currentQuestion.options.map((option, index) => (
                            <button key={index} className={`${styles.btn} ${styles.btnAnswer}`} type="button" onClick={handleNext}>{option}</button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className={styles.container2Wrapper}>
                    {currentQuestion.questions.map((question, index) => (
                        <div key={index} className={styles.container2}>
                            <h2 className={styles.qCardh2}>Question {currentPage + 1}.{index + 1} - {question.category}</h2>
                            <div className={styles.grid}>
                                <h3 className={styles.qCardh3}>{question.text}</h3>
                                <RadioButtonGroup id={`q${currentPage}-${index}`} />
                            </div>
                        </div>
                    ))}
                    <button type="submit" className={`${styles.btn} ${styles.btnSubmit}`} onClick={handleNext}>Next</button>
                </div>
            )}
        </div>
    );
}

export default Question;
