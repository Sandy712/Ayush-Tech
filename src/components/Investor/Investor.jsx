import React from 'react'
import StartupData from './StartupData';

function Investor() {
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
                <a class="dropdown-item" href="#">
                  Option 1
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Option 2
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Option 3
                </a>
              </li>
            </ul>
          </div>

          <button class="btn btn-primary" title="Register as a Startup">
            <i class="fas fa-plus"></i> Register
            
          </button>

          <a href="#" class="text-decoration-none text-white ms-3">
            <i class="fas fa-bell"></i>
          </a>
        </div>
      </header>

      <div className="container mt-5">
    <div className="row">
        <h1>Top Investors</h1>
        {StartupData.map((Startup, index) => (
            <div key={index} className="col-md-4 mb-4">
                <div className="card">
                    {/* Image tag here */}
                    <img src={Startup.imageSrc} className="card-img-top" alt={Startup.companyName} />
                    <div className="card-body">
                        <h5 className="card-title">{Startup.companyName}</h5>
                        <p className="card-text">Revenue: {Startup.revenue}</p>
                        <p className="card-text">Establishment: {Startup.establishment}</p>
                        <p className="card-text">{Startup.otherDetails}</p>
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
