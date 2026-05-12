import styles from './BurgerMenu.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface Category {
  id: string;
  name: string;
  slug: string;
  has_content: boolean;
}

interface BurgerMenuProps {
  categories: Category[];
  onClose: () => void;
}

export default function BurgerMenu({ categories, onClose }: BurgerMenuProps) {
  return (
    <div className={styles.burgerMenu}>
      <div className={styles.section}>
        <span className={styles.sectionLabel}>Our Resources</span>
        <ul className={styles.resourceLinks}>
          {categories.map((category) => (
            <li
              key={category.id}
              className={!category.has_content ? styles.empty : ''}
            >
              <Image src="/arrow-elbow.png" alt="" width={20} height={20} aria-hidden="true" />
              {category.has_content ? (
                <Link href={`/resources/${category.slug}`} onClick={onClose}>{category.name}</Link>
              ) : (
                <span>{category.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <Link href="/about" className={styles.pageLink} onClick={onClose}>About Us</Link>
        <Link href="/researchPresentation" className={styles.pageLink} onClick={onClose}>Our Research Presentation</Link>
        <Link href="/TandC" className={styles.pageLink} onClick={onClose}>Terms and Policy</Link>
        <Link href="/community" className={styles.pageLink} onClick={onClose}>WHL Community</Link>
      </div>
    </div>
  );
}