import styles from '../styles/components/Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/57861255?s=460&u=fab67d1be099c5eebb9bcd5d51c95bd86070f8b4&v=4" alt="Wolf"/>
      <div>
        <strong>They Call Me Wolf</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}