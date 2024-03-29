import { useSpring, animated } from 'react-spring';
import styles from './Title.module.css';

export function NavBar() {
    return (
        <>
            <animated.div
                className={styles.title_container}
                onMouseMove={() => setParallax({ scale: 1.05 })}
                onMouseLeave={() => setParallax({ scale: 1 })}
                style={parallaxProps}
            >
                <div className={styles.title_text}>
                    <animated.div
                        className={styles.title}
                        style={{
                            transform: pulseProps.scale.interpolate(
                                scale => `scale(${scale})`
                            ),
                        }}
                        onMouseEnter={() => setPulse({ scale: 1.1 })}
                        onMouseLeave={() => setPulse({ scale: 1 })}
                    >
                        Hi, I'm <span>Sara Shiojima-Ali</span>!
                    </animated.div>
                    <div className={styles.sub_title}>UI + UX Designer and Frontend Web Developer</div>
                    <div className={styles.slogan}>Bridging Digital Design and Development</div>
                    <div className={styles.social_links}>
                        <a href='https://www.linkedin.com/in/sara-shiojima-ali/' target="_blank" rel="noopener noreferrer">Let's Connect on LinkedIn</a>
                        <a href='https://github.com/SaraShio' target="_blank" rel="noopener noreferrer">Check Out My GitHub</a>
                    </div>

                </div>
                <animated.div
                    className={styles.title_pic}
                    onMouseEnter={() => setSpin({ transform: 'rotateY(720deg)', opacity: 1 })}
                    onMouseLeave={() => setSpin({ transform: 'rotateY(360deg)', opacity: 0.75 })}
                    style={spinProps}
                >
                    <img
                        src="./images/pic_of_me.jpeg"
                        alt="Sara Shiojima"
                    />
                </animated.div>
            </animated.div>
        </>
    );
}
