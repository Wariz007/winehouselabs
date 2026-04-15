import React from 'react';
import styles from './ResourceCard.module.scss';
import Image from 'next/image'; 
import Link from 'next/link';

interface ResourceProps {
  title: React.ReactNode;
  description: string;
  icon?: string;
  href?: string;
}

export default function ResourceCard({ title, description, icon, href }: ResourceProps) {
  return (
    <Link href={href || '#'} className={styles.resourceBtn}>
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