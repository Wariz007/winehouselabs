import React from 'react';
import styles from './ResourceCard.module.scss';
import Image from 'next/image'; 
import Link from 'next/link';

interface ResourceProps {
  title: React.ReactNode;
  description: string;
  icon?: string;
  href?: string;
  hasContent?: boolean;
}

export default function ResourceCard({ title, description, icon, href, hasContent = false }: ResourceProps) {
  return (
    <Link
      href={hasContent ? (href || '#') : '#'}
      className={`${styles.resourceBtn} ${!hasContent ? styles.empty : ''}`}
    >
        <div className={styles.textContainer}>
            <h3 className={styles.heading}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
      
      {icon && (
        <div className={styles.iconContainer}>
          <Image src={icon} alt="" width={50} height={50} />
        </div>
      )}
    </Link>
  );
}