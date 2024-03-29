import { useSpring, animated } from 'react-spring';
import styles from './Title.module.css';

export function Title() {
    const [parallaxProps, setParallax] = useSpring(() => ({
        scale: 1,
        config: { mass: 5, tension: 350, friction: 40 }
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
                <div className={styles.title_pic}>
                    <img
                        src="./images/pic_of_me.jpeg"
                        alt="Sara Shiojima"
                    />
                </div>
            </animated.div>
        </>
    );
}
