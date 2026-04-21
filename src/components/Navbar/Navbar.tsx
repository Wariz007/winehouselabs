'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.scss';
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/Winehouse_logomark.png"
            alt="WinehouseLabs"
            width={50}
            height={50}
            className={styles.logoIcon}
          />
          <Image
            src="/Winehouse_logo.png"
            alt="WinehouseLabs"
            width={120}
            height={50}
            className={styles.logoFull}
          />
        </Link>

        <button
          className={styles.hamburger}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image 
              src="/burger_menu_icon.png"
              alt="burger menu icon"
              width={40}
              height={40}
          />
        </button>

        <ul className={styles.desktopNav}>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/community">Community</Link></li>
        </ul>
      </div>
      {isMenuOpen && <BurgerMenu />}
    </nav>
  );
}