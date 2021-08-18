import { NavLink } from 'react-router-dom'
import styles from '../styles/Footer.module.css'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className={styles.footer}>
        <section className={styles.logoLink}>
              <a href="/">
                <img className={styles.logo} src={logo} alt="MozDevz"/>
              </a>
        </section>
        <section className={styles.links}>
            <NavLink to="/contact">INICIO</NavLink>
            <NavLink to="/contact">PROGRAMAS</NavLink>
            <NavLink to="/contact">EQUIPAS</NavLink>
            <NavLink to="/contact">SOBRE NOS</NavLink>
            <NavLink to="/contact">CONTACTO</NavLink>
        </section>
        <p>&copy; {new Date().getFullYear()} Copyright: <a href="/"> MozDevz </a></p>
    </footer>

  )
}

export default Footer;