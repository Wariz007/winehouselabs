import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerBtns}>
                    <Image 
                        src="/Winehouse_logo.png"
                        alt='WinehouseLabs'
                        width={120}
                        height={50}
                        className={styles.footerLogo}
                    />
                    <ul>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/researchPresentation">Our Research Presentation</Link></li>
                        <li><Link href="/TandC">Terms and Policy</Link></li>
                        <li><Link href="/community">WinehouseLabs Community</Link></li>
                    </ul>
                </div>

                <div className={styles.socials}>
                    <a href="#">
                        <Image 
                            src="/IG.png"
                            alt='Instagram'
                            width={20}
                            height={20}
                        />
                    </a>

                    <a href="#">
                        <Image 
                            src="/X.png"
                            alt='X (formerly Twitter)'
                            width={20}
                            height={20}
                        />
                    </a>

                    <a href="#">
                        <Image 
                            src="/mail.png"
                            alt='mail'
                            width={20}
                            height={20}
                        />
                    </a>
                </div>
            </div>

        </footer>
    )
}