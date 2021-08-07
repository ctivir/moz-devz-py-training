import styles from '../styles/Header.module.css'
import logo from '../assets/mozdevz.png'

function Header() {
  return (
    <header className={styles.header}>
      <mav className={styles.nav}>
        <a className={styles.logoLink} href='/'>
          <img
            className={styles.logo}
            src={logo}
            alt='Comunidade Mozdevz'
          />
        </a>
      </mav>
    </header>
  )
}

export default Header;