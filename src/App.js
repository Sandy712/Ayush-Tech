import './App.css';
import Main from './components/Landingpage/Main';
import NewsComponent from './components/Resources/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Navbar from './components/navbar/Navbar';
import ContactUs from './components/ContactUs/ContactUs';
import { createContext, useEffect, useState } from 'react';


export const DataContainer = createContext();

function App() {

  const [loggedIn, setLoggedIn] = useState('false');
  const [usersData, setUsersData] = useState([]);
  const [current_user, setcurrent_user] = useState('');


  useEffect(() => {
    const storedUsersData = JSON.parse(localStorage.getItem("users")) || [];
    setUsersData(storedUsersData);
  }, []);

  return (
    <DataContainer.Provider
      value={{
        loggedIn,
        setLoggedIn,
        usersData,
        setUsersData,
        current_user,
        setcurrent_user
      }}>

      <div>
        <Router>
          <Navbar current_user={current_user} />
          <Routes>
            <Route exact path='/' element={<Main />} />
          </Routes>
          <Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
          <Routes>
            <Route path='/signup' element={<Signup />} />
          </Routes>
          <Routes>
            <Route path="/News" element={<NewsComponent />} />
          </Routes>
          <Routes>
            <Route path="/Contact-Us" element={<ContactUs />} />
          </Routes>
        </Router>
      </div>

    </DataContainer.Provider>
  );
}

export default App;
