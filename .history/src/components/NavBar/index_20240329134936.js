import styles from './NavBar.module.css';

export function NavBar() {
    return (
        <>
            <div className={styles.social_links}>
                <a href='https://www.linkedin.com/in/sara-shiojima-ali/' target="_blank" rel="noopener noreferrer">Let's Connect on LinkedIn</a>
                <a href='https://github.com/SaraShio' target="_blank" rel="noopener noreferrer">Check Out My GitHub</a>
            </div>        
        </>
    );
}
