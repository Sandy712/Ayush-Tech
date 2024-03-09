import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { firestore } from "../../Firebase";
import { collection, getDocs } from 'firebase/firestore';

function Investor() {
  const [initial, setinitial] = useState([]);
  const [filter, setFilterOptions] = useState('');

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

  const applyFilter = (option) => {
    setFilterOptions(option);
  };

  const filteredInvestors = () => {
    if (!filter) {
      return initial;
    }

    return initial.filter((startup) => {
      if (filter === 'Revenue') {
        return startup.InvestmentAmount >= 20000000;
      } else if (filter === 'Type') {
        return startup.InvestmentType === "Angel"
      }
      return true;
    });

  };

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
                <button className="dropdown-item" onClick={() => applyFilter('Revenue')}>
                  Revenue
                </button>
              </li>
              <li>
                <button className="dropdown-item"  onClick={() => applyFilter('Type')}>
                  Type
                </button>
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
          {filteredInvestors().map((Startup, index) => (
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

export default Investor;
