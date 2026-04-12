'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.scss';

export default function Navbar() {

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/Winehouse_logomark.png"
          alt="WinehouseLabs"
          width={50}
          height={50}
        />
      </Link>

      <button
        className={styles.hamburger}
        aria-label="Toggle menu"
      >
        <Image 
            src="/burger_menu_icon.png"
            alt="burger menu icon"
            width={40}
            height={40}
        />
      </button>
    </nav>
  );
}