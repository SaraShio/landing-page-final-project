import { useSpring, animated } from 'react-spring';
import styles from './Title.module.css';

export function Title() {
    // Define the parallax effect for the container scaling
    const [parallaxProps, setParallax] = useSpring(() => ({
        scale: 1,
        config: { mass: 5, tension: 350, friction: 40 }
    }));

    const [spinProps, setSpin] = useSpring(() => ({
        transform: 'rotate(0deg)',
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
                    <div className={styles.title}>Hi, I'm Sara Shiojima!</div>
                    <div className={styles.sub_title}>UI + UX Designer and Frontend Web Developer</div>
                    <div className={styles.slogan}>Bridging Digital Design and Development</div>
                </div>
                <animated.div
                    className={styles.title_pic}
                    onMouseEnter={() => setSpin({ transform: 'rotate(360deg)' })}
                    onMouseLeave={() => setSpin({ transform: 'rotate(0deg)' })}
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
