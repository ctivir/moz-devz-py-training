import styles from '../styles/Connection.module.css'

function ConnectionItem(props) {
  return (
    <aside className={styles.ConnectionItem}>
      <h2 className={styles.ConnectionTitle}>
        {props.title}
        <span className={styles.bar}></span>
      </h2>
      <p className={styles.ConnectionText}>
        {props.text}
      </p>
    </aside>
  )
}

export default ConnectionItem;