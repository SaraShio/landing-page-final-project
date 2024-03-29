import styles from './Title.module.css'

export function Title() {
    return (
        <>
            <div className={styles.title_container}>
                <div className={styles.title}>Hi, I'm Sara Shiojima!</div>
                <div className={styles.title}>UI + UX Designer and Frontend Web Developer</div>
            </div>
        </>
    );
}
