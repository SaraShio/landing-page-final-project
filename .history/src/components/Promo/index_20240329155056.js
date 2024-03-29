import { useParallax } from 'react-scroll-parallax';
import styles from './Promo.module.css';

export function Promo() {
  const titleParallax = useParallax({
    translateX: ['100px', '0px', 'easeOutQuad'], // This will move from right to center
  });

  const buttonParallax = useParallax({
    speed: 10,
  });

  // Remove the <ParallaxProvider> if it's already provided in the root of your app
  return (
    <div className={styles.promo_container}>
      <h1 ref={titleParallax.ref} className={styles.promo_text}>Contact me for a free consultation!</h1>
      <p className={styles.blurb}>The more time we have to collaborate, the better — so don't hesitate to reach out anytime :)</p>
      <button ref={buttonParallax.ref} className={styles.promo_button} onClick={() => window.location = 'mailto:contact@sarashio.com'}>
        Send an Email
      </button>
    </div>
  );
}
