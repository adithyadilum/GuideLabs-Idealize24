import React from 'react';
import styles from './css/Footer.module.css';
import ScrollEffect from './ScrollEffect';

function Footer() {
    return (
        <footer>
            <ScrollEffect>
                <div className={styles.footerContainer}>
                    <div>
                        <p>Learn</p>
                        <div>
                            <a href="http://">Blog</a>
                            <a href="http://">About</a>
                            <a href="http://">Resources</a>
                        </div>
                    </div>
                    <div>
                        <p>Help</p>
                        <div>
                            <a href="http://">FAQ</a>
                            <a href="http://">Contact</a>
                            <a href="http://">Guidance</a>
                        </div>
                    </div>
                    <div>
                        <p>Company</p>
                        <div>
                            <a href="http://">Culture</a>
                            <a href="http://">Team</a>
                            <a href="http://">Careers</a>
                        </div>
                    </div>
                </div>
            </ScrollEffect>
            <ScrollEffect>
                <div className={styles.footerContainer}>
                    <div className="social-media-links">
                    </div>
                    <p className={styles.tagline}>&copy; {new Date().getFullYear()} GuideLabs. Your future is our project!</p>
                </div>
            </ScrollEffect>
        </footer>
    )
}

export default Footer;