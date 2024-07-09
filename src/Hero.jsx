import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import ScrollEffect from './ScrollEffect';
import Footer from './Footer';
import Question from './Question';

function Hero() {
    const [showQuestion, setShowQuestion] = useState(false);

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section5Ref = useRef(null);
    const section6Ref = useRef(null);
    const getStartedSectionRef = useRef(null);
    const footerRef = useRef(null);

    const handleNext = () => {
        setShowQuestion(true);
    };

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    if (showQuestion) {
        return <Question />;
    }
    const [isInGetStartedSection, setIsInGetStartedSection] = useState(false);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsInGetStartedSection(true);
                } else {
                    setIsInGetStartedSection(false);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.5,
        });

        if (getStartedSectionRef.current) {
            observer.observe(getStartedSectionRef.current);
        }

        return () => {
            if (getStartedSectionRef.current) {
                observer.unobserve(getStartedSectionRef.current);
            }
        };
    }, []);
    return (
        <div className={`container ${isInGetStartedSection ? 'bg-change' : ''}`}>
            <div className="navBar">
                <ScrollEffect>
                    <div className="logo">
                        <img src="src/assets/logo-project NEW-01.svg" alt="" />
                    </div>
                    <div className="navLinks">
                        <a href="#section1" onClick={() => scrollToSection(section1Ref)}>Who are we?</a>
                        <a href="#section2" onClick={() => scrollToSection(section2Ref)}>What we do</a>
                        <a href="#section5" onClick={() => scrollToSection(section5Ref)}>Testimonials</a>
                        <a href="#section6" onClick={() => scrollToSection(section6Ref)}>Pricing</a>
                        <a href="#footer" onClick={() => scrollToSection(footerRef)}>Contact</a>
                    </div>
                </ScrollEffect>
            </div>
            <div className="hero">
                <div className="heroWrapper">
                    <div className="title">
                        <ScrollEffect>
                            <h1>Welcome to GuideLabs</h1>
                        </ScrollEffect>

                        <ScrollEffect>
                            <p className="description">
                                Confused about what subjects to choose for your Advanced Levels? We've got you
                                covered. Explore your options and discover the perfect path to your dream career with our interactive web app. Take quizzes, analyze your strengths, and unlock a world of exciting possibilities. Start your journey today!
                            </p>
                        </ScrollEffect>
                        <div>
                            <ScrollEffect>
                                <button className="btnGetStarted" onClick={() => scrollToSection(getStartedSectionRef)}>Get Started</button>
                                <button className="btnLearnMore" >Learn More</button>
                            </ScrollEffect>
                        </div>
                    </div>

                    <iframe src='https://my.spline.design/untitled-900d11717458b3f2ead534cb30eb9d1b/' frameborder='0' width='100%' height='100%'></iframe>

                </div>
            </div>

            <section id="section1" ref={section1Ref} className="section1">
                <div>
                    <ScrollEffect>
                        <p>Who are we?</p>
                    </ScrollEffect>
                    <ScrollEffect>
                        <h2>
                            We’re the savvy sidekick, the brain whisperer, the future navigator for students after O level exams! We’re GuideLabs.
                        </h2>
                    </ScrollEffect>
                </div>
            </section>

            <section id="section2" ref={section2Ref} className="section2">
                <div>
                    <ScrollEffect>
                        <div className='imgPlaceholder'>
                            <img src="https://images.unsplash.com/photo-1719165809715-4c8060b2e13b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </ScrollEffect>
                    <ScrollEffect>
                        <div>
                            <h3>Smart insights into A level subject streams</h3>
                            <p>We delve into your academic achievements, identify your potential & suggest the most suitable subject streams for your A levels.</p>
                        </div>
                    </ScrollEffect>
                </div>
                <div>
                    <ScrollEffect>
                        <div>
                            <h3>Explore your future path</h3>
                            <p>Discover detailed information about career paths, required skills, and connect with professionals in each industry.</p>
                        </div>
                    </ScrollEffect>
                    <ScrollEffect>
                        <div className='imgPlaceholder'>
                            <img src="https://images.unsplash.com/photo-1719165809715-4c8060b2e13b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </ScrollEffect>
                </div>
            </section>

            <section id="section3" className="section3">
                <div>
                    <ScrollEffect>
                        <img src="https://img.icons8.com/?size=100&id=MSWiZ5qvGzVg&format=png&color=000000" alt="" />
                    </ScrollEffect>
                    <img src="https://img.icons8.com/?size=100&id=MSWiZ5qvGzVg&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=100&id=MSWiZ5qvGzVg&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=100&id=MSWiZ5qvGzVg&format=png&color=000000" alt="" />
                    <img src="https://img.icons8.com/?size=100&id=MSWiZ5qvGzVg&format=png&color=000000" alt="" />
                </div>
            </section>

            <section id="section4" className="section4">
                <div>
                    <ScrollEffect>
                        <div className='section4Container'>
                            <h2>1000</h2>
                        </div>
                    </ScrollEffect>
                    <ScrollEffect>
                        <div className='section4Container '>
                            <img src="https://img.icons8.com/?size=100&id=109686&format=png&color=000000" alt="" />
                            <p>Our platform has already advised 1000+ students on their post-O-level journey!</p>
                        </div>
                    </ScrollEffect>
                </div>
            </section>

            <section id="section5" ref={section5Ref} className="section5">
                <div>
                    <ScrollEffect>
                        <div className='section5Container'>
                            <img src="https://img.icons8.com/?size=100&id=1z2QHLAUDqtl&format=png&color=000000" alt="" />
                            <p>"We’ll be using GuideLabs exclusively in our counseling sessions. It’s a comprehensive platform for students.”</p>
                            <p>EduVista</p>
                        </div>
                    </ScrollEffect>
                    <ScrollEffect>
                        <div className='section5Container'>
                            <img src="https://img.icons8.com/?size=100&id=12208&format=png&color=000000" alt="" />
                            <p>"It’s about time someone leveled up the career guidance game! GuideLabs has my full endorsement.”</p>
                            <p>CareerSfera</p>
                        </div>
                    </ScrollEffect>
                </div>
            </section>

            <section id="getStartedSection" ref={getStartedSectionRef} className='getStartedSection'>
                <div className='getStartedContainer'>
                    <ScrollEffect>
                        <div className='getStartedContent'>
                            <h3>Not sure which industry suits you best?</h3>
                            <div>
                                <p>Take our career industry test to find the perfect match!</p>
                                <button type="button">Lets go</button></div>
                        </div>
                    </ScrollEffect>
                    <ScrollEffect>
                        <div className='getStartedContent'>
                            <h3>Already know your ideal industry?</h3>
                            <div>
                                <p>Select your career path to start exploring your options!</p>
                                <button type="button" onClick={handleNext}>Lets go</button></div>
                        </div>
                    </ScrollEffect>
                </div>
            </section>

            <section id="section6" ref={section6Ref} className='section6'>
                <div>
                    <ScrollEffect>
                        <div className='card'>
                            <img src="https://img.icons8.com/?size=100&id=Og4wEFAlRsa3&format=png&color=000000" alt="" />
                            <p>Free</p>
                            <h3>0LKR</h3>
                            <div className='cardContent'>
                                <div>
                                    <span className="material-symbols-rounded">check</span>
                                    <p>Profile Creation</p>
                                </div>
                                <div>
                                    <span className="material-symbols-rounded">check</span>
                                    <p>Basic Guidance</p>
                                </div>
                                <div>
                                    <span className="material-symbols-rounded">check</span>
                                    <p>Limited Support</p>
                                </div>
                                <div>
                                    <span className="material-symbols-rounded">check</span>
                                    <p>2 Weeks</p>
                                </div>
                            </div>
                            <button>
                                Embark Free
                            </button>
                        </div>
                    </ScrollEffect>
                    <ScrollEffect>
                        <div className='card'>
                            <img src="https://img.icons8.com/?size=100&id=47071&format=png&color=000000" alt="" />
                            <p>Pro</p>
                            <h3>499LKR</h3>
                            <div className='cardContent'>
                                <div>
                                    <span className="material-symbols-rounded">check</span>
                                    <p>Advanced Insights</p>
                                </div>
                                <div>
                                    <span className="material-symbols-rounded">check</span>
                                    <p>Direct mentorship</p>
                                </div>
                                <div>
                                    <span className="material-symbols-rounded">check</span>
                                    <p>Unlimited Support</p>
                                </div>
                                <div>
                                    <span className="material-symbols-rounded">check</span>
                                    <p>30 Days</p>
                                </div>
                            </div>
                            <button>
                                Go Pro
                            </button>
                        </div>
                    </ScrollEffect>
                    <ScrollEffect>
                        <div className='card'>
                            <img src="https://img.icons8.com/?size=100&id=hcZ65S78dSp6&format=png&color=000000" alt="" />
                            <p>Elite</p>
                            <h3>999LKR</h3>
                            <div className='cardContent'>
                                <div>
                                    <span className="material-symbols-rounded">check</span>
                                    <p>Complete Access</p>
                                </div>
                                <div>
                                    <span className="material-symbols-rounded">check</span>
                                    <p>Peer Networking</p>
                                </div>
                                <div>
                                    <span className="material-symbols-rounded">check</span>
                                    <p>Priority Support</p>
                                </div>
                                <div>
                                    <span className="material-symbols-rounded">check</span>
                                    <p>Lifetime Access</p>
                                </div>
                            </div>
                            <button>
                                Go Elite
                            </button>
                        </div>
                    </ScrollEffect>
                </div>
            </section>

            <section id="footer" ref={footerRef} className="section7">
                <ScrollEffect>
                    <h2>Enlighten me...</h2>
                </ScrollEffect>
                <ScrollEffect>
                    <div className='section7Container'>
                        <div>
                            <h2>What is GuideLabs</h2>
                            <p>GuideLabs is a one-stop solution for students who have just completed their O levels. We analyse your academic performance and provide you with tailored advice that enables you to choose the best subject streams for your A levels. Along your journey, we provide ample resources for exploring career paths within each subject stream, making connections with industry professionals, and providing guidance every step of the way.</p>
                        </div>
                        <div>
                            <h2>Can I trust GuideLabs?</h2>
                            <p>Absolutely yes! We hold the key to your future at the heart of our operation. We’re dedicated to giving you the most accurate advice that’s backed by data. Moreover, we’ve already guided thousands of students towards their dreams. You’re next!</p>
                        </div>
                        <div>
                            <h2>How much does it cost?</h2>
                            <p>We have three pricing tiers. You can start for free and pay when you’re ready to unlock more features! Let’s shape your future together!</p>
                        </div>
                    </div>
                </ScrollEffect>
            </section>
            <Footer />
        </div>
    );
}

export default Hero;
