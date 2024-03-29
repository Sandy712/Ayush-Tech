import React, { useEffect, useState,useRef } from 'react'
import { Link } from 'react-router-dom';
import { firestore } from "../../Firebase";
import { collection, getDocs } from 'firebase/firestore';
import emailjs from "@emailjs/browser";


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

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    
    try {
        await emailjs.sendForm(
            "service_9ygu824",
            "template_l9vtooe",
            form.current,
            {
                publicKey: "90zPepEbLIreC9P-d",
            }
        );
        
        // Update the HTML element to show success message
        alert('Request is has been sent successfully')
        
      } catch (error) {
        console.log("FAILED...", error.text);
      }
      closeForm();

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
                <button className="dropdown-item" onClick={() => applyFilter('Type')}>
                  Type
                </button>
              </li>
            </ul>
          </div>

          <Link to="/InvestorForm" style={{ color: "white" }}>
            <button className="btn btn-primary" title="Register as a Startup">
              <i className="fas fa-plus"></i> Register
            </button>
          </Link>

          <a href="/" className="text-decoration-none text-white ms-3">
            <i className="fas fa-bell"></i>
          </a>
        </div>
      </header>

      <div className="container mt-5">
        {/* <div className="row">
          <h1>Top Investors</h1>
          {filteredInvestors().map((Startup, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                 
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
        </div> */}
        <div className="row">
          <h1>Top Investors</h1>
          {filteredInvestors().map((Startup, index) => (
            <div key={index} className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img
                  className="card-img-top img-fluid"
                  src={Startup.PhotoURL}
                  alt="..."
                  style={{ width: "32rem", height: "17rem" }} // Set fixed size here
                />
                <div className="card-body p-4">
                  <a className="text-decoration-none link-dark " href="#!">
                    <div className="h5 card-title mb-3">
                      {Startup.Name}
                    </div>
                  </a>
                  <p className="card-text mb-0">{Startup.InvestmentType}</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="small">
                        <div className="fw-bold">
                          Total Investment: {Startup.InvestmentAmount}
                        </div>

                      </div>
                    </div>
                    <button className="btn btn-success" onClick={openForm}>
                      Connect +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="form-popup" id="myForm" style={{ display: "none" }}>
          <form className="form-container" ref={form} onSubmit={sendEmail}>
            <h1>Connection</h1>
            {/* {filteredInvestors().map((investor , index)=>(
               <input name="user_reciver"></input>
               ))} */}

             
            <label htmlFor="name">
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              name="user_name"
              required
            />

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="user_email"
              required
            />

            <input
              type="submit"
              className="btn btn-success"
              value="Send Request"
            />
            <button type="button" className="btn cancel" onClick={closeForm}>
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Investor;
