import styles from '../styles/Stats.module.css'

function StatsItem(props) {
  return (
    <aside className={styles.statsItem}>
      <h2 className={styles.statsTitle}>
        {props.title}
        <span className={styles.bar}></span>
      </h2>
      <p className={styles.statsText}>
        {props.text}
      </p>
    </aside>
  )
}

export default StatsItem;