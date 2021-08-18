import Header from '../components/Header';
import StatsItem from '../components/StatsItem'
import LearnItem from '../components/LearnItem'
import ConnectionItem from '../components/ConnectionItem'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css';
import cover from '../assets/cover.svg'
import mozdevzc from '../assets/mozdevz.jpg'
import codingIcon from '../assets/icons/programing.svg'


function ContactUs() {
  return (
    <div className={styles.home}>
      <Header />

       <Footer />

    </div>
  )
}

export default ContactUs;