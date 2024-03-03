import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { firestore } from "../../Firebase";
import { collection, getDocs } from 'firebase/firestore';

function Investor() {
  const [initial, setinitial] = useState([]);

  const GetInvestor = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(firestore, "Investors_details")
      );

      const invest_Data = querySnapshot.docs.map((doc) => doc.data());
      setinitial(invest_Data);
    }
    catch (error) {
      console.error("Error getting investor Data", error);
    }
  }

  useEffect(() => {
    GetInvestor();
  }, []);

  return (
    <div>
      <header className="bg-dark text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="filterDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter
            </button>
            <ul className="dropdown-menu" aria-labelledby="filterDropdown">
              <li>
                <a className="dropdown-item" href="/">
                  Option 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Option 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Option 3
                </a>
              </li>
            </ul>
          </div>

          <button className="btn btn-primary" title="Register as a Startup">
            <Link to="/InvestorForm" style={{ color: "white" }}>
              <i className="fas fa-plus"></i> Register
            </Link>

          </button>

          <a href="/" className="text-decoration-none text-white ms-3">
            <i className="fas fa-bell"></i>
          </a>
        </div>
      </header>

      <div className="container mt-5">
        <div className="row">
          <h1>Top Investors</h1>
          {initial.map((Startup, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                {/* Image tag here */}
                <img src={Startup.PhotoURL} className="card-img-top" alt={Startup.Name} />
                <div className="card-body">
                  <h5 className="card-title">{Startup.Name}</h5>
                  <p className="card-text">Investor Type: {Startup.InvestmentType}</p>
                  <p className="card-text">Total Investment: {Startup.InvestmentAmount}</p>
                  <p className="card-text">Email:{Startup.Contact}</p>
                  <button className="btn btn-primary">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Investor
