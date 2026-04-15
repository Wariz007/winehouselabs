import styles from './AandC.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsAndCommunity() {
    return (
        <section className={styles.aboutUsAndCommunity}>
            <div className={styles.aboutUs}>
                <p>
                    Our ultimate goal is to make sure our actions contribute to the prosperity and pride of Nigeria. Using the knowledge we accumulate, we aim to solve real-world problems and create meaningful change across Nigeria—from local communities to the national stage
                </p>

                <Link href="#">Read more about us</Link>
            </div>

            <div className={styles.community}>
                <Image 
                    src="/WHL-community-design.png"
                    alt='Winehouse community design'
                    width={350}
                    height={200}
                    className={styles.communityImage}
                />

                <div className={styles.communityText}>
                    <p className={styles.heading}>There is so much to build. <br /> And fix</p>
                    <p>
                        The Winehouse community is focused on building generations of capable Nigerian software engineers who will rise to the challenge of solving Nigeria's toughest problems
                    </p>
                    <Link href="#">Join Us!</Link>
                </div>
            </div>

        </section>
    )
}