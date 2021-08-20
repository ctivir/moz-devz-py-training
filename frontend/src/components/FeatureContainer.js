import styles from '../styles/Home.module.css'
import talent from '../assets/icons/talents.svg'
import startup from '../assets/icons/startup.svg'
import corporate from '../assets/icons/corporate.svg'

function FeatureContainer() {
  return (
    <aside className={styles.featureContainer}>
      <aside className={styles.featureCard}>
        <img
          className={styles.featureIcon}
          src={talent}
          alt="talents"
        />
        <h3 className={styles.featureContainerTitle}>Startup</h3>
        <p className={styles.featureContainerText}>
          Capacitamos e desenvolvemos talentos
          com o objectivo de preparar e integrar
          no mercado de trabalho atraves da nossa
          rede de paceiros.
        </p>
      </aside>

      <aside className={styles.featureCard}>
        <img
          className={styles.featureIcon}
          src={startup}
          alt="startup"
        />
        <h3 className={styles.featureContainerTitle}>Talentos</h3>
        <p className={styles.featureContainerText}>
          Apoiamos equipas multidisciplinares
          com orientação e capacitação no
          desenvolvimento de soluções
          tecnologicas em ambientes de
          extrema incerteza.
        </p>
      </aside>

      <aside className={styles.featureCard}>
        <img
          className={styles.featureIcon}
          src={corporate}
          alt="corpoate"
        />
        <h3 className={styles.featureContainerTitle}>Corporate</h3>
        <p className={styles.featureContainerText}>
          Firmamos parceirias e trabalhamos com
          empresas e ONGs no desenvolvimento de
          soluções de base tecnologica para a
          resolução de problemas sociais.
        </p>
      </aside>
    </aside>
  )
}

export default FeatureContainer;