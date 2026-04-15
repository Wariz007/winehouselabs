import React from 'react';
import styles from './ResourceCard.module.scss';
import Image from 'next/image'; 

interface ResourceProps {
  title: React.ReactNode;
  description: string;
  icon?: string; // Or a ReactNode if passing icons
}

export default function ResourceCard({ title, description, icon }: ResourceProps) {
  return (
    <button className={styles.resourceBtn}>
        <div className={styles.textContainer}>
            <h3 className={styles.heading}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
      
      {icon && (
        <div className={styles.iconContainer}>
          <Image src={icon} alt="Resource icon" width={50} height={50} />
        </div>
      )}
    </button>
  );
}