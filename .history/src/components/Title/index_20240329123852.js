import { useSpring, animated } from 'react-spring';
import styles from './Title.module.css';

export function Title() {
    const [parallaxProps, setParallax] = useSpring(() => ({
        scale: 1,
        config: { mass: 5, tension: 350, friction: 40 }
    }));


    const [pulseProps, setPulse] = useSpring(() => ({
        scale: 1,
        config: { duration: 500 }, 
        loop: { reverse: true },
    }));


    const [spinProps, setSpin] = useSpring(() => ({
        transform: 'rotateY(0deg)',
        opacity: 0.5,
        config: { tension: 150, friction: 10 }
    }));
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
                        Hi, I'm <span>Sara Shiojima</span>!
                    </animated.div>
                    <div className={styles.sub_title}>UI + UX Designer and Frontend Web Developer</div>
                    <div className={styles.slogan}>Bridging Digital Design and Development</div>
                    <div className={styles.social_links}>
                    <a href=''>LinkedIn</a>
                    <a href=''>GitHub</a>
                    </div>

                </div>
                <animated.div
                    className={styles.title_pic}
                    onMouseEnter={() => setSpin({ transform: 'rotateY(720deg)', opacity: 1 })}
                    onMouseLeave={() => setSpin({ transform: 'rotateY(360deg)', opacity: 0.5 })}
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
