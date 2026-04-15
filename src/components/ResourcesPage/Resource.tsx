import styles from './Resource.module.scss';
import Image from 'next/image';
import ResourceCard from './ResourceCard';

export default function Resource() {
    return (
        <section className={styles.resources}>
            <div className={styles.resourcesContainer}>
                <p className={styles.heading}>Resources</p>

                <div className={styles.resourcesSection}>
                    <ResourceCard 
                        title={<>How <br /> Computers <br /> Work</>}
                        description="Understanding how high-level code translates into physical execution on the silicon."
                        icon='/circuitry.png'
                    />

                    <ResourceCard 
                        title="Web Technologies"
                        description="Languages and tools used to build for the web"
                        icon='/globe.png'
                    />

                    <ResourceCard 
                        title="Programming Languages"
                        description="Different languages to communicate with computers"
                        icon='/terminal.png'
                    />

                    <ResourceCard 
                        title="Tech Roles"
                        description="Resources organized by engineering discipline"
                        icon='/users.png'
                    />

                    <ResourceCard 
                        title="Essential Tools"
                        description="Cross-disciplinary tools"
                        icon='/cpu.png'
                    />
                </div>
            </div>
        </section>
    )
}