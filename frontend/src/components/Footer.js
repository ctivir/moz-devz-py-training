import styles from '../styles/footer.module.css'
import logo from '../assets/logo.png'
import toTop from '../assets/icons/up-arrow.svg'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Logo */}
      <aside className={styles.footerLogo}>
        <img
          src={logo}
          alt='Mozdevz'
        />
      </aside>

      {/* Navigation */}
      <aside className={styles.footerNav}>
        <a className={styles.link} href="/">Programas</a>
        <a className={styles.link} href="/">Equipe</a>
        <a className={styles.link} href="/">Sobre</a>
        <a className={styles.link} href="/">Contacto</a>
      </aside>

      {/* Details */}
      <aside className={styles.footerDetails}>
        <p className={styles.footerCopy}>
          {`<MOZDEVZ/>`} Todos direitos reservados.2021
        </p>

        <div className={styles.footerSocials}>
          <i className={styles.socialIcon}>
            <img src={facebook} alt="facebook" />
          </i>
          <i className={styles.socialIcon}>
            <img src={twitter} alt="twitter" />
          </i>
        </div>

        {/* <button className={styles.toTop}>
          <img src={toTop} alt="to top" />
        </button> */}
      </aside>
    </footer>
  )
}

export default Footer;