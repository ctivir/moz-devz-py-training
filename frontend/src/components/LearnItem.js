import styles from '../styles/Learn.module.css'

function LearnItem(props) {
  return (
    <aside className={styles.LearnItem}>
      <h2 className={styles.LearnTitle}>
        {props.title}
        <span className={styles.bar}></span>
      </h2>
      <p className={styles.LearnItemText}>
        {props.text}
      </p>
    </aside>
  )
}

export default LearnItem;