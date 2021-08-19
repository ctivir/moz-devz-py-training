import styles from '../styles/Header.module.css'
import logo from '../assets/logo.png'

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.left}>
        <a className={styles.logoLink} href='/'>
          <img
            className={styles.logo}
            src={logo}
            alt='Comunidade Mozdevz'
          />
        </a>
      </nav>
    </header>
  )
}

export default Header;