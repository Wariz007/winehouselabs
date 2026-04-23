import { createClient } from '@/utils/supabase/server'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import styles from './page.module.scss'

interface Props {
  params: Promise<{ slug: string, subjectSlug: string, topicSlug: string }>
}

export default async function TopicPage({ params }: Props) {
  const { slug, subjectSlug, topicSlug } = await params
  const supabase = await createClient()

  const { data: topic } = await supabase
    .from('topics')
    .select()
    .eq('slug', topicSlug)
    .single()

  if (!topic) notFound()

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <span className={styles.lastUpdated}>Last updated: {topic.created_at?.split('T')[0]}</span>
        <h1 className={styles.heading}>{topic.title}</h1>
      </div>

      <div className={styles.divider}></div>

      <article className={styles.content}>
        <ReactMarkdown>{topic.content}</ReactMarkdown>
      </article>
    </main>
  )
}