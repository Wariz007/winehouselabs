import { createClient } from '@/utils/supabase/server'
import { notFound } from 'next/navigation'
import styles from './page.module.scss'
import SubjectCard from '@/components/SubjectCard/SubjectCard'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: category } = await supabase
    .from('categories')
    .select()
    .eq('slug', slug)
    .single()

  if (!category) notFound()

  const { data: categorySubjects } = await supabase
    .from('category_subjects')
    .select(`
      order,
      subjects (*)
    `)
    .eq('category_id', category.id)
    .order('order', { ascending: true })

  return (
    <main className={styles.page}>
      <div className={styles.pageContent}>
        <div className={styles.header}>
          <h1 className={styles.heading}>{category.name}</h1>
          <p className={styles.description}>{category.page_description}</p>
        </div>

        <div className={styles.divider}></div>

        <ul className={styles.subjects}>
          {categorySubjects?.map((item) => {
            const subject = item.subjects as any
            return (
              <li key={subject.id}>
                <SubjectCard
                  title={subject.name}
                  description={subject.description}
                  coverImage={subject.cover_image}
                  lastUpdated={subject.last_updated}
                  href={`/resources/${slug}/${subject.slug}`}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}