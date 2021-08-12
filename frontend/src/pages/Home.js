import Header from '../components/Header';
import StatsItem from '../components/StatsItem'
import styles from '../styles/Home.module.css';
import cover from '../assets/cover.svg'
import codingIcon from '../assets/icons/programing.svg'


function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <section className={styles.hero}>
        {/* Description */}
        <aside className={styles.heroDescription}>
          <h1 className={styles.heroTitle}>
            A maior comunidade de desenvolvedores de Moçambique
          </h1>
          <button>Saiba Mais</button>
        </aside>

        {/* Cover */}
        <aside className={styles.heroCover}>
          <img
            className={styles.coverImage}
            src={cover}
            alt='Comunidade Mozdevz'
          />
        </aside>
      </section>

      <section className="stats">
        {/* Description */}
        <aside className={styles.statsDescription}>
          <h2 className={styles.statsTitle}>
            Impactamos milhares de devz
            e impulsionamos carreiras
          </h2>
          <i className={styles.codingIcon}>
            <img
              src={codingIcon}
              alt='Coding Icon'
            />
          </i>
        </aside>

        {/* Container */}
        <aside className={styles.statsContainer}>
          <StatsItem
            title={`500`}
            text={`
              Moz Devz Community
            `}
          />
          <StatsItem
            title={`+800`}
            text={`
              Moz Devz Cjdjjdommunity
            `}
          />
        </aside>
      </section>
    </div>
  )
}

export default Home;