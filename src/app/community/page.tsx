import styles from './community.module.scss';

export default function CommunityPage() {
    return (
        <form action="" className={styles.communityPage}>
            <div className={styles.communityContainer}>
                <header className={styles.communityHeader}>
                    <span>The WinehouseLabs Community</span>
                    <h1>There is so much to Build. <br /> And Fix.</h1>
                    <p>
                        A community for beginning and established <br /> engineers with a burning desire to build and fix Nigeria.
                    </p>
                </header>

                <div className={styles.inputContainer}>
                    <input 
                    type="text"
                    name="fullName"
                    id="fullName" 
                    required
                    className={styles.inputField}
                    placeholder="Full Name" />

                    <input 
                    type="email"
                    name="email"
                    id="email"
                    required
                    className={styles.inputField}
                    placeholder="Email Address" />

                    <input 
                    type="tel" 
                    name='phone'
                    id='phone'
                    required
                    className={styles.inputField}
                    placeholder="e.g +234..." />

                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}