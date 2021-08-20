import styles from '../styles/Home.module.css'
import oxfam from '../assets/sponsors/oxfam.png'
import cca from '../assets/sponsors/cca.png'
import ciuem from '../assets/sponsors/ciuem.png'
import coworklab from '../assets/sponsors/coworklab.png'
import mctestp from '../assets/sponsors/mctestp.png'
import psi from '../assets/sponsors/psi.png'
import reino from '../assets/sponsors/reino.png'


function SponsorsContainer() {
  return (
    <aside className={styles.sponsorsContainer}>
      <aside className={styles.sponsorsCard}>
        <img
          className={styles.sponsorsImage}
          src={oxfam}
          alt="oxfam"
        />
      </aside>
      <aside className={styles.sponsorsCard}>
        <img
          className={styles.sponsorsImage}
          src={ciuem}
          alt="ciuem"
        />
      </aside>
      <aside className={styles.sponsorsCard}>
        <img
          className={styles.sponsorsImage}
          src={reino}
          alt="reino"
        />
      </aside>
      <aside className={styles.sponsorsCard}>
        <img
          className={styles.sponsorsImage}
          src={psi}
          alt="psi"
        />
      </aside>
      <aside className={styles.sponsorsCard}>
        <img
          className={styles.sponsorsImage}
          src={cca}
          alt="cca"
        />
      </aside>
      <aside className={styles.sponsorsCard}>
        <img
          className={styles.sponsorsImage}
          src={coworklab}
          alt="coworklab"
        />
      </aside>
      <aside className={styles.sponsorsCard}>
        <img
          className={styles.sponsorsImage}
          src={mctestp}
          alt="mctestp"
        />
      </aside>
    </aside>
  )
}

export default SponsorsContainer;