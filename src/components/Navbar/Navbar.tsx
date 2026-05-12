import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.scss';
import NavbarClient from './NavbarClient';
import { createClient } from '@/utils/supabase/server';

export default async function Navbar() {
  const supabase = await createClient()
  const { data: categories } = await supabase
    .from('categories')
    .select()
    .order('created_at', { ascending: true })

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

        <NavbarClient categories={categories || []} />

        <ul className={styles.desktopNav}>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/community">Community</Link></li>
        </ul>
      </div>
    </nav>
  );
}