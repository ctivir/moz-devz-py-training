import Header from '../components/Header';
import StatsItem from '../components/StatsItem'
// import LearnItem from '../components/LearnItem'
// import ConnectionItem from '../components/ConnectionItem'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css';
import cover from '../assets/cover.svg'
import mozdevzc from '../assets/mozdevz.jpg'
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

      <section className={styles.stats}>
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
            title={'5000'}
            text={'Pessoas sensibilizadas atraves de eventos educacionais e partilha de experiencia'}
          />
          <StatsItem
            title={'+800'}
            text={'Pessoas sensibilizadas atraves de eventos educacionais e partilha de experiencia'}
          />
          <StatsItem
            title={'+800'}
            text={'Pessoas sensibilizadas atraves de eventos educacionais e partilha de experiencia'}
          />
          <StatsItem
            title={'+100'}
            text={'Pessoas sensibilizadas atraves de eventos educacionais e partilha de experiencia'}
          />
        </aside>
      </section>

      <section className={styles.hero}>
       {/* Cover */}
        <aside className={styles.heroCover}>
          <img
            className={styles.coverImage}
            src={mozdevzc}
            alt='Comunidade Mozdevz'
          />
        </aside>

        <aside className={styles.heroDescription}>
          <h1 className={styles.heroTitle}>
            Aprendemos em comunidade
          </h1>
          <p>Proporcionamos oportunidades de partilha de conhecimento e desenvolvimento de habilidades para a criação de produtos digitais a jovens durante o period de formação e contribuimos para o desenvolvimento da sociedade atraves das soluções desenvolvidas.
          </p>
          <button>Saiba Mais</button>
        </aside>
      </section>


      <Footer />

    </div>
  )
}

export default Home;