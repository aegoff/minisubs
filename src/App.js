import Header from './components/Header';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import './App.css';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Listings from "./pages/Listings";
import SingleListing from "./pages/SingleListing";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Error from "./pages/Error";
import SignUp from './pages/SignUp';
import MyAccount from './pages/MyAccount';

function App() {
  return (
      <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/contactus" element={<ContactUs/>} />
            <Route path="/myaccount/:username" element={<MyAccount/>}/>
            <Route path="/listings/:zip" element={<Listings/>} />
            <Route path="/listing/:zip/:id" element={<SingleListing/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="*" element={<Error/>} />
          </Routes>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
