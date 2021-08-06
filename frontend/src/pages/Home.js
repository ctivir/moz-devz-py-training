import styles from '../styles/Home.module.css'
import hero from '../assets/cover.svg'
import coding from '../assets/icons/programing.svg'
import StatsItem from '../components/StatsItem'

function Home() {
  return (
    <div className={styles.home}>
      <h1>Home</h1>

      <section className={styles.hero}>
        <aside className={styles.heroDescription}>
          <h1 className={styles.heroTitle}>
            A maior comunidade de desenvolvedores
            de Moçambique
          </h1>
          <button>Saiba mais</button>
        </aside>
        <aside className={styles.heroCover}>
          <img
            src={hero}
            alt='A maior comunidade de devz de Moz'
          />
        </aside>
      </section>

      <section className={styles.stats}>
        <aside className={styles.statsDescription}>
          <h2 className={styles.statsTitle}>
            Impactamos milhares de devz e
            impulsionamos carreiras
          </h2>
          <i className={styles.codingIcon}>
            <img
              src={coding}
              alt='Coding Icon'
            />
          </i>
        </aside>

        <aside className={styles.statsContainer}>
          <StatsItem
            title={`5000`}
            text={`
              Pessoas sensibilizadas atraves
              de eventos educacionais e partilha
              de experiência
            `}
          />

          <StatsItem
            title={`+800`}
            text={`
              Pessoas sensibilizadas atraves
              de eventos educacionais e partilha
              de experiência
            `}
          />

          <StatsItem
            title={`+300`}
            text={`
              Pessoas sensibilizadas atraves
              de eventos educacionais e partilha
              de experiência
            `}
          />

          <StatsItem
            title={`+100`}
            text={`
              Pessoas sensibilizadas atraves
              de eventos educacionais e partilha
              de experiência
            `}
          />
        </aside>
      </section>
    </div>
  )
}

export default Home;