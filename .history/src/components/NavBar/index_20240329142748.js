import React, { useState } from 'react';
import styles from './NavBar.module.css';

export function NavBar() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    return (
        <div className={styles.nav_container}>
            <div className={styles.logo}>
                <img
                    src="./images/logo.png"
                    alt="Sara Shiojima Logo"
                    width="100px"
                    height="100px"
                    className={styles.logo_image}
                />
            </div>

            <div className={styles.links}>
                <div className={styles.dropdown}>
                    <button
                        className={styles.drop_btn}
                        onClick={() => setDropdownVisible(!dropdownVisible)}
                    >
                        Portfolio
                    </button>
                    {dropdownVisible && (
                        <div className={styles.dropdown_content}>
                            <a href='https://www.sarashio.com/p/portfolio-2024/027e9728' target="_blank" rel="noopener noreferrer"> <img src="/images/right_arrow.svg" alt="Arrow" className={styles.icon} />Moneyment</a>
                            <a href='https://www.sarashio.com/p/portfolio-2024/02e8d634' target="_blank" rel="noopener noreferrer"> <img src="/images/right_arrow.svg" alt="Arrow" className={styles.icon} />Wedding Brochure</a>
                            <a href='https://www.sarashio.com/p/portfolio-2024/02e8d79d' target="_blank" rel="noopener noreferrer"> <img src="/images/right_arrow.svg" alt="Arrow" className={styles.icon} />Landing Page</a>
                            <a href='https://www.sarashio.com/p/portfolio-2024/02e8d632' target="_blank" rel="noopener noreferrer"> <img src="/images/right_arrow.svg" alt="Arrow" className={styles.icon} />Motion Graphics</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
