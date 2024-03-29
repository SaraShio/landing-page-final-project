import React from 'react';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer_container}>
            <div className={styles.footer_content}>
                <p>© {new Date().getFullYear()} Sara Shiojima. All rights reserved.</p>
                <p>Made with love for great user experiences.</p>
            </div>
        </footer>
    );
}
