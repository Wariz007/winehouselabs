import styles from './Resource.module.scss';
import ResourceCard from './ResourceCard';
import { createClient } from '@/utils/supabase/server';

export default async function Resource() {
    const supabase = await createClient()
    const { data: categories } = await supabase
        .from('categories')
        .select()
        .order('created_at', { ascending: true })

    return (
        <section className={styles.resources}>
            <div className={styles.resourcesContainer}>
                <h2 className={styles.heading}>Resources</h2>

                <ul className={styles.resourcesSection}>
                    {categories?.map((category) => (
                        <li key={category.id}>
                            <ResourceCard 
                                title={category.name}
                                description={category.description}
                                href={`/resources/${category.slug}`}
                                hasContent={category.has_content}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}