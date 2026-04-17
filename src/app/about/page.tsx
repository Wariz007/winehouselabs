import styles from "./About.module.scss";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className={styles.aboutPage}>
            <div className={styles.aboutContainer}>
                <header>
                    <span>Our Mission</span>
                    <h1>Research. Innovate. Build.</h1>
                    <Image 
                        src='/aboutImage.png'
                        alt='About Us image'
                        width={350}
                        height={200}
                        className={styles.aboutImage}
                    />
                </header>

                <div className={styles.aboutBody}>
                    <p>
                        WinehouseLabs (WHL) was founded as the starting point of a bigger plan to bring about prosperity and technological change to Nigeria. Our ultimate goal with WinehouseLabs is to accumulate the world's knowledge on software engineering, then apply this knowledge to solve problems at local and national levels of the country.
                        
                    </p>
                    <p>
                        In the 21st century, we believe Nigeria is far behind in its expertise and capabilities in software engineering — one of the world's most valuable, pervasive, and important technologies. Our goal is to fill this vacuum with our 3 areas of focus: Research, Innovation, and Building Nigeria.
                    </p>

                    <section className={styles.sections}>
                        <h2>Research</h2>
                        <p>
                            In this century, information has never been more easily accessible to humans across the world. This information, however, is often disorganized. Therefore, our first focus is conducting thorough and credible research.

                        </p>
                        <p>
                            We aim to accumulate knowledge on software engineering, then organize it in digestible and comprehensive formats for Nigerians anywhere to use. We will start from the simplest technologies, then progress into more sophisticated and powerful technologies that can be used to build more powerful and useful tools for the benefit of our country and citizens.
                        </p>
                    </section>

                    <section className={styles.sections}>
                        <h2>Innovate</h2>
                        <p>
                            With more knowledge and expertise, our second area of focus is innovation. With our growing capabilities, the Winehouse Team will constantly be on the lookout for problems and obsolete areas that we can apply our expertise to bring about a better experience for Nigerians.
                        </p>
                    </section>

                    <section className={styles.sections}>
                        <h2>Build</h2>
                        <p>
                            Our last area of focus, and the most important, is our commitment to the development of Nigeria.Bringing together our research and innovation, we hope our actions result in a better Nigeria with more technological prowess and positive growth evident at the local, national, and international stage.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}