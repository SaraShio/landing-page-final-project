// We don't need to use ParallaxProvider here if it's used in App.js already
import { useParallax } from 'react-scroll-parallax';
import styles from './Promo.module.css';

export function Promo() {
  const titleParallax = useParallax({
    speed: -20,
    horizontal: true // Added for horizontal parallax effect
  });

  const buttonParallax = useParallax({
    speed: 10,
    opacity: [0, 1], // Optionally, we can make the button fade in
    transition: 'opacity 0.3s' // Smooth the opacity transition
  });

  return (
    <div className={styles.promo_container}>
      <h1 ref={titleParallax.ref}>Contact me for a free consultation!</h1>
      <p className={styles.blurb}>The more time we have to collaborate, the better — so don't hesitate to reach out anytime!</p>
      <button ref={buttonParallax.ref} className={styles.promo_button} onClick={() => window.location = 'mailto:contact@sarashio.com'}>
        Send an Email
      </button>
    </div>
  );
}
