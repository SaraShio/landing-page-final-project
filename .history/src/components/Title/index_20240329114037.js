import styles from './Title.module.css'

export function Title() {
    return (
        <>
            <div className={styles.title_container}>
                <div className={styles.title}>Hi, I'm Sara Shiojima!</div>
                <div className={styles.sub_title}>UI + UX Designer and Frontend Web Developer</div>
                <div className={styles.slogan}>Bridging Digital Design and Development.</div>

                <div>
                    <img
                        src="./images/pic_of_me.jpeg"
                        height="4000"
                        width="4000"
                        alt="thumbnail"
                    />
                </div>
            </div>
        </>
    );
}
