import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import ContactUs from './components/ContactUs';
import './styles/global.css'

function App() {
  return (
    <Router>
      <div>
        <Home />
        <Route path ='/contact' component={ContactUs} />
      </div>
      </Router>
  );
}

export default App;
