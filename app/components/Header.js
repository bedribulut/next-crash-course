import styles from "../styles/header.module.css"

function Header() {
  return (
    <div>
        <h1 className={styles.title}>
            <span>WebDev </span>
            News
        </h1>
        <p className={styles.description}>
            Keep up to date with the latest web dev news
        </p>
    </div>
  )
}

export default Header