import { createClient } from '@/utils/supabase/server'
import { notFound } from 'next/navigation'
import styles from './page.module.scss'

interface Props {
  params: Promise<{ slug: string, subjectSlug: string }>
}

export default async function SubjectPage({ params }: Props) {
  const { slug, subjectSlug } = await params
  const supabase = await createClient()

  const { data: subject } = await supabase
    .from('subjects')
    .select()
    .eq('slug', subjectSlug)
    .single()

  if (!subject) notFound()

  const { data: topics } = await supabase
    .from('topics')
    .select()
    .eq('subject_id', subject.id)
    .order('order', { ascending: true })

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.heading}>{subject.name}</h1>
      </div>

      <div className={styles.divider}></div>

      <ul className={styles.topics}>
        {topics?.map((topic: any) => (
          <li key={topic.id} className={styles.topicItem}>
            <span className={styles.lastUpdated}>Last updated: {topic.created_at?.split('T')[0]}</span>
            <a href={`/resources/${slug}/${subjectSlug}/${topic.slug}`} className={styles.topicLink}>
              {topic.title}
            </a>
            <div className={styles.divider}></div>
          </li>
        ))}
      </ul>
    </main>
  )
}