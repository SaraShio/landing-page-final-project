import styles from './Title.module.css'

import { useParallax } from "react-scroll-parallax";


export function Title() {

  const parallax = useParallax({
    rotateY: [0, 360],
  });
    return (
        <>
            <div className={styles.title_container}>
                <div className={styles.title}>Hi, I'm Sara Shiojima!</div>
                <div className={styles.sub_title}>UI + UX Designer and Frontend Web Developer</div>
                <div className={styles.slogan}>Bridging Digital Design and Development.</div>

                <div>
                <div ref={parallax.ref} className="spinner flex gap-3">
      <img
        src="./images/me.png"
        height="4000"
        width="4000"
        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </div>
                </div>
            </div>
        </>
    );
}
