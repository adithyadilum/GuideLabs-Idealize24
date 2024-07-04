import React, { useState } from 'react';
import styles from './css/RadioButtonGroup.module.css';

const RadioButtonGroup = () => {
    const [selectedOption, setSelectedOption] = useState('Agree');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
                <input
                    type="radio"
                    value="Agree"
                    checked={selectedOption === 'Agree'}
                    onChange={handleOptionChange}
                    className={styles.radioInput}
                />
                Agree
            </label>
            <label className={styles.radioLabel}>
                <input
                    type="radio"
                    value="Neutral"
                    checked={selectedOption === 'Neutral'}
                    onChange={handleOptionChange}
                    className={styles.radioInput}
                />
                Neutral
            </label>
            <label className={styles.radioLabel}>
                <input
                    type="radio"
                    value="Disagree"
                    checked={selectedOption === 'Disagree'}
                    onChange={handleOptionChange}
                    className={styles.radioInput}
                />
                Disagree
            </label>
        </div>
    );
};

export default RadioButtonGroup;
