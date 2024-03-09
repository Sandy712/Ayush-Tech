import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
// import investorsData from "./InvestorData";
import { Link } from "react-router-dom";
import { firestore } from "../../Firebase";

function Startup() {
  const [final, setfinal] = useState([]);
  const [filter, setFilterOptions] = useState('');


  const GetStartups = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(firestore, "Startups_items")
      );
      const startupData = querySnapshot.docs.map((doc) => doc.data());
      setfinal(startupData);
    } catch (error) {
      console.error("Error getting startups", error);
    }
  };

  useEffect(() => {
    GetStartups();
  }, []);

  const applyFilter = (option) => {
    setFilterOptions(option);
  };

  const filteredInvestors = () => {
    if (!filter) {
      return final;
    }

    return final.filter((startup) => {
      if (filter === 'Revenue') {
        return startup.Company_Revenue >= 150;
      } else if (filter === 'Date') {
        return startup.Company_Launch > "2015-10-05";
      }
      return true;
    });

  };


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
                <button className="dropdown-item" onClick={() => applyFilter('Revenue')}>
                  Revenue
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => applyFilter('Date')}>
                  Date
                </button>
              </li>
            </ul>
          </div>

          <button class="btn btn-primary" title="Register as a Startup">
            <i class="fas fa-plus"></i>
            <Link to="/StartupForm" style={{ color: "black" }}>
              Register
            </Link>
          </button>

          <a href="/" class="text-decoration-none text-white ms-3">
            <i class="fas fa-bell"></i>
          </a>
        </div>
      </header>

      <div className="container mt-5">
        <div className="row">
          <h1>Top Investors</h1>
          {filteredInvestors().map((investor, index) => (
            <div key={index} className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img
                  className="card-img-top img-fluid"
                  src={investor.Company_Logo}
                  alt="..."
                  style={{ width: '32rem', height: '17rem' }} // Set fixed size here
                />
                <div className="card-body p-4">
                  <a className="text-decoration-none link-dark stretched-link" href="#!">
                    <div className="h5 card-title mb-3">{investor.Company_Name}</div>
                  </a>
                  <p className="card-text mb-0">{investor.Company_Details}</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="small">
                        <div className="fw-bold">Revenue: {investor.Company_Revenue}</div>
                        <div className="text-muted">Established: {investor.Company_Launch}</div>
                      </div>
                    </div>
                  </div>
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
