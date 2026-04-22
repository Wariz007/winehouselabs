import styles from './SubjectCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface SubjectCardProps {
  title: string
  description: string
  coverImage: string
  lastUpdated: string
  href: string
}

export default function SubjectCard({ title, description, coverImage, lastUpdated, href }: SubjectCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.imageContainer}>
            {coverImage && coverImage.length > 0 ? (
            <Image
                src={coverImage}
                alt={title}
                fill
                className={styles.image}
            />
            ) : (
            <div className={styles.placeholder}></div>
            )}
        </div>

      <div className={styles.content}>
        <span className={styles.lastUpdated}>Last updated: {lastUpdated}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  )
}