import styles from './NavBar.module.css';

export function NavBar() {
    return (
        <div className={styles.nav_container}>
            <div className={styles.logo}>
                <img
                    src="./images/logo.png"
                    alt="Sara Shiojima Logo"
                    width="80px"
                    height="80px"
                    className={styles.logo_image}
                />
            </div>

            <div className={styles.links}>
                <a href='https://www.linkedin.com/in/sara-shiojima-ali/' target="_blank" rel="noopener noreferrer">Portfolio</a>
                <a href='https://github.com/SaraShio' target="_blank" rel="noopener noreferrer">Contact Me</a>
            </div>
        </div>
    );
}
