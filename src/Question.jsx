import React, { useState, useEffect } from "react";
import styles from './css/Question.module.css';
import RadioButtonGroup from './RadioButtonGroup.jsx';
import questions from './Data/questionData_IT.js';
import Result from './Result.jsx';

function Question() {
    const [currentPage, setCurrentPage] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [fade, setFade] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleNext = () => {
        if (currentPage < questions.length - 1) {
            setFade(false);
            setTimeout(() => {
                setCurrentPage(currentPage + 1);
                setFade(true);
            }, 500);
        } else {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setShowResults(true);
            }, 2000);
        }
    };
    const handleBack = () => {
        if (currentPage > 0) {
            setFade(false);
            setTimeout(() => {
                setCurrentPage(currentPage - 1);
                setFade(true);
            }, 500);
        }
    };

    useEffect(() => {
        if (!showResults) {
            setFade(true);
        }
    }, [showResults]);

    if (showResults) {
        return <Result selectedFieldId={1} />;
    }

    const currentQuestion = questions[currentPage];
    const isLastQuestion = currentPage === questions.length - 1;
    const progressWidth = ((currentPage + 1) / questions.length) * 100;

    return (
        <div className={styles.wrapper}>
            <img src="src\assets\rainbow-vortex.svg" alt="" srcset="" />
            {isLoading ? (
                <div class={styles.ldsdefault}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            ) : (
                currentQuestion.type === 'single' ? (
                    <div className={styles.container1Wrapper}>
                        <div className={`${styles.container1} ${fade ? styles.visible : styles.hidden}`}>
                            <h2 className={styles.qCardh2}>Question {currentPage + 1} - {currentQuestion.category}</h2>
                            <h3 className={styles.qCardh3}>{currentQuestion.text}</h3>
                            <div className={currentPage === 0 ? styles.btnGroupWrap : styles.btnGroup}>
                                {currentQuestion.options.map((option, index) => (
                                    <button key={index} className={`${styles.btn} ${styles.btnAnswer}`} type="button" onClick={handleNext}>{option}</button>
                                ))}
                            </div>
                            <div className={styles.navGroup}>
                                <button type="button" className={`${styles.btn} ${styles.btnNav}`} onClick={handleBack} disabled={currentPage === 0}>
                                    Back
                                </button>
                            </div>
                        </div>
                        <div className={styles.progressContainer}>
                            <div className={styles.progressBar} style={{ width: `${progressWidth}%` }}></div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.container2Wrapper}>
                        {currentQuestion.questions.map((question, index) => (
                            <div key={index} className={`${styles.container2} ${fade ? styles.visible : styles.hidden}`}>
                                <h2 className={styles.qCardh2}>Question {currentPage + 1}.{index + 1} - {question.category}</h2>
                                <div className={styles.grid}>
                                    <h3 className={styles.qCardh3}>{question.text}</h3>
                                    <RadioButtonGroup id={`q${currentPage}-${index}`} />
                                </div>
                            </div>
                        ))}
                        <div className={styles.btnGroup}>
                            <button type="button" className={`${styles.btn} ${styles.btnNav}`} onClick={handleBack} disabled={currentPage === 0}>
                                Back
                            </button>
                            <button type="submit" className={`${styles.btn} ${styles.btnSubmit}`} onClick={handleNext}>
                                {isLastQuestion ? "Show Results" : "Next"}
                            </button>
                        </div>
                        <div className={styles.progressContainer}>
                            <div className={styles.progressBar} style={{ width: `${progressWidth}%` }}></div>
                        </div>
                    </div>
                ))}

        </div>
    );
}

export default Question;
