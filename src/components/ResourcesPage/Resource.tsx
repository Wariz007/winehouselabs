import styles from './Resource.module.scss';
import Image from 'next/image';
import ResourceCard from './ResourceCard';

export default function Resource() {
    return (
        <section className={styles.resources}>
            <div className={styles.resourcesContainer}>
                <h2 className={styles.heading}>Resources</h2>

                <ul className={styles.resourcesSection}>
                    <li>
                        <ResourceCard 
                            title="Web Technologies"
                            description="Languages and tools used to build for the web"
                            icon='/globe.png'
                            href='#'
                            hasContent={true}
                        />
                    </li>

                    <li>
                        <ResourceCard 
                            title="Programming Languages"
                            description="Different languages to communicate with computers"
                            icon='/terminal.png'
                            href='#'
                            hasContent={true}
                        />
                    </li>

                    <li>
                        <ResourceCard 
                            title="Essential Tools"
                            description="Cross-disciplinary tools"
                            icon='/cpu.png'
                            href='#'
                            hasContent={false}
                        />
                    </li>

                    <li>
                        <ResourceCard 
                            title="Tech Roles"
                            description="Resources organized by engineering discipline"
                            icon='/users.png'
                            href='#'
                            hasContent={false}
                        />
                    </li>

                    <li>
                        <ResourceCard 
                            title={<>How <br /> Computers <br /> Work</>}
                            description="Understanding how high-level code translates into physical execution on the silicon."
                            icon='/circuitry.png'
                            href='#'
                            hasContent={false}
                        />
                    </li>
                </ul>
            </div>
        </section>
    )
}