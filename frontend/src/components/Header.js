import { NavLink } from 'react-router-dom'
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
        <nav className={styles.center}>
            <NavLink to="/contact">INICIO</NavLink>
            <NavLink to="/contact">PROGRAMAS</NavLink>
            <NavLink to="/contact">EQUIPAS</NavLink>
            <NavLink to="/contact">SOBRE NOS</NavLink>
            <NavLink to="/contact">CONTACTO</NavLink>
      </nav>
      <nav className={styles.right}>
            <NavLink to="/contact">INICIO</NavLink>
            <NavLink to="/contact">PROGRAMAS</NavLink>
      </nav>
    </header>
  )
}

export default Header;