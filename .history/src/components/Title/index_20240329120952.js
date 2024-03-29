import { useSpring, animated } from 'react-spring';
import styles from './Title.module.css';

export function Title() {
    // Define the parallax effect for the container scaling
    const [parallaxProps, setParallax] = useSpring(() => ({
        scale: 1,
        config: { mass: 5, tension: 350, friction: 40 }
    }));

    // Define the spinning effect for the image
    const [spinProps, setSpin] = useSpring(() => ({
        transform: 'rotateY(0deg)',
        opacity: 0.5,
        config: { tension: 150, friction: 10 }
    }));

    // Define the pulsing effect for the name "Sara Shiojima"
    const [pulseProps, setPulse] = useSpring(() => ({
        scale: 1,
        config: { duration: 500 },
        loop: { reverse: true },
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
                    <div className={styles.title}>
                        Hi, I'm {' '}
                        <animated.span
                            style={{
                                transform: pulseProps.scale.to(scale => `scale(${scale})`)
                            }}
                            onMouseEnter={() => setPulse({ scale: 1.1 })}
                            onMouseLeave={() => setPulse({ scale: 1 })}
                        >
                            Sara Shiojima
                        </animated.span>
                        !
                    </div>
                    <div className={styles.sub_title}>UI + UX Designer and Frontend Web Developer</div>
                    <div className={styles.slogan}>Bridging Digital Design and Development</div>
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
