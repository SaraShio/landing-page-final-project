import styles from './NavBar.module.css';

export function NavBar() {
    return (
        <>
            <div>
                <div className={styles.logo}>
                    <img>
                    </img>
                </div>


                <div className={styles.links}>
                    <a href='https://www.linkedin.com/in/sara-shiojima-ali/' target="_blank" rel="noopener noreferrer">Portfolio</a>
                    <a href='https://github.com/SaraShio' target="_blank" rel="noopener noreferrer">Contact Me</a>
                </div>
            </div>
        </>
    );
}
