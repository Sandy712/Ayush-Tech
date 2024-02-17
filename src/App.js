import './App.css';
import Main from './components/Landingpage/Main';
import NewsComponent from './components/Resources/News';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Navbar from './components/navbar/Navbar';
import ContactUs from './components/ContactUs/ContactUs';
import { createContext, useEffect, useState } from 'react';
import FandQ from './components/Fquestion/FandQ';


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
        <Navbar current_user={current_user} />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/News" element={<NewsComponent />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          <Route path='/FandQ' element={<FandQ />} />
        </Routes>
      </div>

    </DataContainer.Provider>
  );
}

export default App;
