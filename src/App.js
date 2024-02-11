
import './App.css';
import Main from './components/Landingpage/Main';
import NewsComponent from './components/Resources/News';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
 
import Navbar from './components/navbar/Navbar';
import ContactUs from './components/ContactUs/ContactUs';


function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Main/>} /> 
      </Routes>
       
      <Routes>
        <Route path="/News" element={<NewsComponent />} />
      </Routes>
      <Routes>
        <Route path="/Contact-Us" element={<ContactUs/>} />
      </Routes>
    </Router>
       
      
      

    </div>
  );
}

export default App;
