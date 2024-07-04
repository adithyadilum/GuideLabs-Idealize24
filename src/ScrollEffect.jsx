import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './css/ScrollEffect.css';

const ScrollEffect = ({ children }) => {
    const [inView, setInView] = useState(false);

    const { ref } = useInView({
        threshold: 0.1,
        onChange: (inView) => {
            setInView(inView);
        },
    });

    return (
        <div ref={ref} className={`fade-in-section ${inView ? 'is-visible' : ''}`}>
            {children}
        </div>
    );
};

export default ScrollEffect;
