import './App.css';
import Main from './components/Landingpage/Main';
import NewsComponent from './components/Resources/News';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Navbar from './components/navbar/Navbar';
import ContactUs from './components/ContactUs/ContactUs';
import { createContext, useEffect, useState } from 'react';
import Startup from './components/Startup/Startup';
import Investor from './components/Investor/Investor';
import RegisterForm from './components/Startup/RegisterForm';
import { v4 as uuid } from "uuid";
import { app, storage } from "./Firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";


export const DataContainer = createContext();

function App() {

  const [loggedIn, setLoggedIn] = useState('false');
  const [usersData, setUsersData] = useState([]);
  const [current_user, setcurrent_user] = useState('');

  useEffect(() => {
    const storedUsersData = JSON.parse(localStorage.getItem("users")) || [];
    setUsersData(storedUsersData);
  }, []);



  const savestartup = async (input, logo, rev, launch, deta) => {
    const db = getFirestore(app);
    const storageRef = ref(storage, `storage_logo/${uuid()}_${logo.name}`);

    try {
      const dataURL = await convertFileToDataURL(logo);


      console.log('Starting file upload...');
      await uploadString(storageRef, dataURL, 'data_url');
      console.log('File upload successful.');

      const logoUrl = await getDownloadURL(storageRef);
      console.log('Download URL retrieved:', logoUrl);


      const docRef = await addDoc(collection(db, "Startups_items"), {
        id: uuid(),
        Company_Name: input,
        Company_Logo: logoUrl,
        Company_Revenue: rev,
        Company_Launch: launch,
        Company_Details: deta,
      });

      console.log("Startup added with ID: ", docRef.id);
    } catch (e) {
      console.error("An error occurred:", e);
    }
  };

  const convertFileToDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  };





  // const savestartup = async (input, logo, rev, launch, deta) => {
  //   const db = getFirestore(app);
  //   const storageRef = ref(storage, `storage_logo/${uuid()}_${logo.name}`)

  //   try {

  //     await uploadString(storageRef, logo, 'data_url');

  //     const logoUrl = await getDownloadURL(storageRef);

  //     const docRef = await addDoc(collection(db, "Startups_items"), {
  //       id: uuid(),
  //       Company_Name: input,
  //       Company_Logo: logoUrl,
  //       Company_Revenue: rev,
  //       Company_Launch: launch,
  //       Company_Details: deta,
  //     });

  //     console.log("Startup added with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("something is blast in code : ", e);
  //   }
  // };

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
        </Routes>
        <Routes>
          <Route exact path='/startup' element={<Startup />} />
        </Routes>
        <Routes>
          <Route exact path='/investor' element={<Investor />} />
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
          <Route path='/RegisterForm-startup' element={<RegisterForm savestartup={savestartup} />} />
        </Routes>

      </div>

    </DataContainer.Provider>
  );
}

export default App;
