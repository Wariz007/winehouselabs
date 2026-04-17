import styles from './Hero.module.scss';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
          <div className={styles.heading}>
              <span className={styles.missionLabel}>Mission</span>

              <h1 className={styles.headline}>
                  Accumulating the world&apos;s knowledge on software engineering to solve Nigerian problems
              </h1>

              <Image 
                      src="/arrow-down-right-icon.png"
                      alt="arrow"
                      width={40}
                      height={40}
                      aria-hidden="true"
                      className={styles.arrow}
              />
          </div>

          <Image 
              src="/Nigerian_flag.png"
              alt="Nigerian flag"
              width={350}
              height={290}
              className={styles.flag}
          />

        <ul className={styles.pillars}>
          <li className={styles.pillar}>
            <h4>Research</h4>
            <p>Accumulating the worlds knowledge on software engineering</p>
          </li>
          <li className={styles.pillar}>
            <h4>Innovate</h4>
            <p>Finding solutions to Nigeria&apos;s toughest problems</p>
          </li>
          <li className={styles.pillar}>
            <h4>Build</h4>
            <p>Committed to building Nigeria</p>
          </li>
        </ul>
      </div>
    </section>
  );
}