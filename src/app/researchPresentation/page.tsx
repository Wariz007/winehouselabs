import styles from './researchPresentation.module.scss';


export default function ResearchPresentationPage() {
    return (
        <main className={styles.researchPresentationPage}>
            <div className={styles.researchPresentationContainer}>
                <h1>Our Research Presentation</h1>

                <div className={styles.body}>

                    <p>The resources on WinehouseLabs are not tutorials or study guides. They are not designed to teach you software engineering from scratch.</p>

                    <p>
                        What you will find here is a presentation of our work — the technologies our team has studied, tested, and documented as part of our ongoing research into software engineering. Each resource represents knowledge we have accumulated and organised for our own use as a team, made public as a contribution to the broader knowledge available to Nigerian engineers.
                    </p>

                    <p>
                        Think of it less like a course and more like looking over the shoulder of a research team. The depth is there. The rigour is there. But the intent is documentation, not instruction.
                    </p>

                    <p>
                        You will also notice that not every technology in existence is represented here. Where multiple technologies serve the same purpose, we document the ones we have evaluated and consider the strongest option for the task. This is a reflection of our research conclusions, not an oversight.
                    </p>

                    <p>
                        That said, there are cases where two technologies serving a similar function both earn their place — our work may cover both Tailwind and SCSS, for example, because each has a context where it is the better tool. What you will not find is every option simply for the sake of completeness. Our research leads, and the platform follows.
                    </p>
                    
                    <p>
                        If you find it useful, we're glad. That is the spirit of open knowledge.
                    </p>
                </div>

            </div>

        </main>
    )
}