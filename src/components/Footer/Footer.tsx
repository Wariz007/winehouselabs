import styles from './Footer.module.scss';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerBtns}>
                    <Image 
                        src="/Winehouse_logo.png"
                        alt='The WHL logo'
                        width={120}
                        height={50}
                        className={styles.footerLogo}
                    />
                    <button>About Us</button>
                    <button>Our Research Presentation</button>
                    <button>Terms and Policy</button>
                    <button>WinehouseLabs Community</button>
                </div>

                <div className={styles.socials}>
                    <button>
                        <Image 
                            src="/IG.png"
                            alt='The WHL logo'
                            width={20}
                            height={20}
                        />
                    </button>

                    <button>
                        <Image 
                            src="/X.png"
                            alt='The WHL logo'
                            width={20}
                            height={20}
                        />
                    </button>

                    <button>
                        <Image 
                            src="/mail.png"
                            alt='The WHL logo'
                            width={20}
                            height={20}
                        />
                    </button>
                </div>
            </div>

        </footer>
    )
}