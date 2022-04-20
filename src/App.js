import Header from './components/Header';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import './App.css';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import GenListing from './pages/GenListing';
import SpecListing from './pages/SpecListing';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/genlisting" element={<GenListing/>}/>
          <Route path="/speclisting" element={<SpecListing/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
