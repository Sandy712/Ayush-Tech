import './App.css';
import Main from './components/Landingpage/Main';
import NewsComponent from './components/Resources/News';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Navbar from './components/navbar/Navbar';
import ContactUs from './components/ContactUs/ContactUs';
import { createContext, useEffect, useState } from 'react';
import Startup from './components/Startup/Startup';
import Investor from './components/Investor/Investor';
import StartupRegisterForm from './components/Startup/RegisterForm';
import FandQ from './components/Fquestion/FandQ';
import InvestorRegisterForm from "./components/Investor/RegisterForm";
import Webinars from './components/Webinar/Webinars';


export const DataContainer = createContext();

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
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
          <Route exact path='/' element={<Main />} current_user={current_user}/>
        </Routes>
        <Routes>
          <Route exact path='/startup' element={loggedIn ? <Startup /> : <Navigate to='/login' />} />
        </Routes>
        <Routes>
          <Route exact path='/investor' element={loggedIn ? <Investor /> : <Navigate to='/login' />} />
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
        <Routes>
          <Route path="/F&A" element={<FandQ />} />
        </Routes>
        <Routes>
          <Route path='/StartupForm' element={<StartupRegisterForm />} />
        </Routes>
        <Routes>
          <Route path='/InvestorForm' element={<InvestorRegisterForm />} />
        </Routes>
        <Routes>
          <Route path='/webs' element={<Webinars />} />
        </Routes>

      </div>

    </DataContainer.Provider>
  );
}

export default App;
