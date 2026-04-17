import styles from './TandC.module.scss';

export default function TandCPage() {
    return (
        <main className={styles.tandcPage}>
            <div className={styles.tandcContainer}>
                <header>
                    <span>Last updated: April, 2026</span>
                    <h1>Terms and Policy</h1>
                </header>

                <div className={styles.tandcBody}>
                    <section className={styles.sections}>
                        <h2> What WinehouseLabs Is</h2>
                        <p>
                            WinehouseLabs is a research platform documenting the software engineering work of the WinehouseLabs team. The resources published here represent our findings, conclusions, and knowledge accumulated through our own research and practical experience. This platform is made public as a contribution to the broader knowledge available to Nigerian software engineers and anyone else who finds it useful.
                        </p>
                        <p>
                            WinehouseLabs is not a tutorial platform, a course provider, or an educational institution. Nothing on this platform should be interpreted as professional advice or formal instruction.
                        </p>
                    </section>

                    <section className={styles.sections}>
                        <h2>Intellectual Property</h2>
                        <p>
                            All research, writing, and content published on WinehouseLabs is the intellectual property of WinehouseLabs. You are welcome to read, reference, and draw from our work, but reproduction or redistribution of our content without explicit permission is not permitted.
                        </p>
                    </section>

                    <section className={styles.sections}>
                        <h2>No Warranty</h2>
                        <p>
                            The knowledge presented on this platform reflects our research conclusions at the time of publication. We do not guarantee that every piece of information is complete, current, or free of error. Technology moves fast and our documentation will evolve with our research. Use our work as a reference, not as a final authority.
                        </p>
                    </section>

                    <section className={styles.sections}>
                        <h2>Technology Choices</h2>
                        <p>
                            The technologies documented on WinehouseLabs reflect the tools our team has studied and evaluated. Where we cover one technology over another, it represents our research conclusion — not a claim that alternatives are without merit. Our platform may cover multiple technologies that serve similar purposes where our research finds sufficient distinction to warrant it.
                        </p>
                    </section>

                    <section className={styles.sections}>
                        <h2>External Links</h2>
                        <p>
                            WinehouseLabs may reference or link to external platforms, tools, and resources. We are not responsible for the content, accuracy, or availability of any external site. A link from our platform does not constitute an endorsement.
                        </p>
                    </section>

                    <section className={styles.sections}>
                        <h2>The WinehouseLabs Community</h2>
                        <p>
                            Participation in the WinehouseLabs community is a privilege. We reserve the right to remove anyone whose conduct is inconsistent with the values and seriousness of what we are building. Respect for the work and for other members is non-negotiable.
                        </p>
                    </section>

                    <section className={styles.sections}>
                        <h2>Changes to This Policy</h2>
                        <p>
                            We reserve the right to update these terms at any time. The date at the top of this page will reflect the most recent revision. Continued use of the platform following any update constitutes acceptance of the revised terms.
                        </p>
                    </section>

                </div>
            </div>
        </main>
    )
}