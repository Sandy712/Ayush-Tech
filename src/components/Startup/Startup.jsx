import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
// import investorsData from "./InvestorData";
import { Link } from "react-router-dom";
import { firestore } from "../../Firebase";

function Startup() {

  const [final, setfinal] = useState([]);

  const GetStartups = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "Startups_items"));
      const startupData = querySnapshot.docs.map((doc) => doc.data());
      setfinal(startupData);
    } catch (error) {
      console.error('Error getting startups', error);
    }
  };

  useEffect(() => {
    GetStartups();
  }, []);


  return (
    <div>
      <header class="bg-dark text-white py-3">
        <div class="container d-flex justify-content-between align-items-center">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="filterDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter
            </button>
            <ul class="dropdown-menu" aria-labelledby="filterDropdown">
              <li>
                <a class="dropdown-item" href="/">
                  Option 1
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/">
                  Option 2
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/">
                  Option 3
                </a>
              </li>
            </ul>
          </div>

          <button class="btn btn-primary" title="Register as a Startup" >
            <i class="fas fa-plus">
            </i>
            <Link to='/RegisterForm-startup' style={{ color: 'black' }}>Register</Link>

          </button>

          <a href="/" class="text-decoration-none text-white ms-3">
            <i class="fas fa-bell"></i>
          </a>
        </div>
      </header>

      <div className="container mt-5">
        <div className="row">
          <h1>Top Investors</h1>
          {final.map((investor) => (
            <div key={investor.id} className="col-md-4 mb-4">
              <div className="card">
                {/* Image tag here */}
                <img src={investor.Company_Logo} className="card-img-top" alt={investor.Company_Name} />
                <div className="card-body">
                  <h5 className="card-title">{investor.Company_Name}</h5>
                  <p className="card-text">Revenue: {investor.Company_Revenue}</p>
                  <p className="card-text">Establishment: {investor.Company_Launch}</p>
                  <p className="card-text">{investor.Company_Details}</p>
                  <button className="btn btn-primary">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Startup;
