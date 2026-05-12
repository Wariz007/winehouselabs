'use client';

import { useState } from 'react';
import styles from './Navbar.module.scss';
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu';

interface Category {
  id: string;
  name: string;
  slug: string;
  has_content: boolean;
}

interface NavbarClientProps {
  categories: Category[];
}

export default function NavbarClient({ categories }: NavbarClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        className={styles.hamburger}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img 
          src="/burger_menu_icon.png"
          alt="burger menu icon"
          width={40}
          height={40}
        />
      </button>
      {isMenuOpen && <BurgerMenu categories={categories} onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}