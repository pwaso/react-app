import { Route, Routes } from 'react-router-dom';
import './App';
import Home from './pages/Home';
import WebsiteNavigation from './components/layout/WebsiteNavigation';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import CustomerRegister from './pages/CustomerRegister';
import Customer from './pages/Customer';

function App() {
  return (
    
    <div className="App">
      <WebsiteNavigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact-with-us" element={<ContactUs/>}/>
        <Route path="/login-page" element={<Login/>}/>
        <Route path="/customer-register-page" element={<CustomerRegister/>}/>
        <Route path="/welcome-customer-its-your-page" element={<Customer/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
