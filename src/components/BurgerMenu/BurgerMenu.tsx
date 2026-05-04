import styles from './BurgerMenu.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function BurgerMenu() {
  return (
    <div className={styles.burgerMenu}>
      <div className={styles.section}>
        <span className={styles.sectionLabel}>Our Resources</span>
        <ul className={styles.resourceLinks}>
          <li>
            <Image src="/arrow-elbow.png" alt="" width={20} height={20} aria-hidden="true" />
            <Link href="/resources/web-technologies">Web Technologies</Link>
          </li>
          <li>
            <Image src="/arrow-elbow.png" alt="" width={20} height={20} aria-hidden="true" />
            <Link href="/resources/programming-languages">Programming Languages</Link>
          </li>
          <li>
            <Image src="/arrow-elbow.png" alt="" width={20} height={20} aria-hidden="true" />
            <Link href="/resources/essential-tools">Essential Tools</Link>
          </li>
          <li>
            <Image src="/arrow-elbow.png" alt="" width={20} height={20} aria-hidden="true" />
            <Link href="/resources/tech-roles">Tech Roles</Link>
          </li>
          <li>
            <Image src="/arrow-elbow.png" alt="" width={20} height={20} aria-hidden="true" />
            <Link href="/resources/computer-systems">Computer Systems & Architecture</Link>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <Link href="/about" className={styles.pageLink}>About Us</Link>
        <Link href="/research-presentation" className={styles.pageLink}>Our Research Presentation</Link>
        <Link href="/terms" className={styles.pageLink}>Terms and Policy</Link>
        <Link href="/community" className={styles.pageLink}>WHL Community</Link>
      </div>
    </div>
  );
}