import styles from './Title.module.css'

export function Title() {
    return (
        <>
            <div className={styles.title_container}>
                <div className={styles.title_text}>
                    <div className={styles.title}>Hi, I'm Sara Shiojima!</div>
                    <div className={styles.sub_title}>UI + UX Designer and Frontend Web Developer</div>
                    <div className={styles.slogan}>Bridging Digital Design and Development.</div>
                </div>

                <div className={styles.pic_container}>
                    <img
                        src="./images/pic_of_me.jpeg"
                        alt="thumbnail"
                    />
                </div>
            </div>
        </>
    );
}
