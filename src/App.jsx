
import React from 'react';
import Hero from './Hero.jsx';
import Question from './Question.jsx';
import Result from './Result.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    // const [currentStep, setCurrentStep] = useState(1);
    // const [buttonPressInfo, setButtonPressInfo] = useState({});

    // const handleButtonPress = (step, info) => {
    //     setButtonPressInfo(prevState => ({
    //         ...prevState,
    //         [step]: info
    //     }));
    //     setCurrentStep(currentStep + 1);
    // };

    return (
        <div>
            {/* {currentStep === 1 && <FirstComponent onButtonPress={(info) => handleButtonPress(1, info)} />}
            {currentStep === 2 && <SecondComponent buttonPressInfo={buttonPressInfo} />} */}
            {/* Add more steps as needed */}
            {/* <Hero /> */}
            {/* <Question /> */}
            <Result selectedFieldId={10} />
        </div>
    )
}

export default App;