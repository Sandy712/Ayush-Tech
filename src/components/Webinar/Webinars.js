// Your main React component
import React from "react";
import "./webinarscs.css"; // Import your CSS file

const Webinars = () => {
  return (
    <div className="container">
      {/* <div className='row'>
                <div className="community-card">
                    <h3>Global Tech Investors Network</h3>
                    <p>Connect with global tech investors and stay updated on the latest investment trends in the tech industry.</p>
                    <button className="join-button">Join</button>
                </div>
                <div className="community-card">
                    <h3>Social Impact Investors Hub</h3>
                    <p>Join a community of investors dedicated to supporting and funding social impact projects around the world.</p>
                    <button className="join-button">Join</button>
                </div>
                <div className="community-card">
                    <h3>Emerging Markets Investment Forum</h3>
                    <p>Connect with investors focusing on opportunities in emerging markets and share insights on successful investments.</p>
                    <button className="join-button">Join</button>
                </div>
                <div className="community-card">
                    <h3>Tech Innovators Club</h3>
                    <p>Join a community of tech enthusiasts and innovative startups to collaborate on cutting-edge projects and ideas.</p>
                    <button className="join-button">Join</button>
                </div>
                <div className="community-card">
                    <h3>Sustainable Solutions Collective</h3>
                    <p>Connect with startups and individuals working towards sustainable solutions and creating a positive impact on the environment.</p>
                    <button className="join-button">Join</button>
                </div>
                <div className="community-card">
                    <h3>Fintech Innovators Network</h3>
                    <p>Join a community of fintech startups, entrepreneurs, and investors to discuss the latest trends in financial technology.</p>
                    <button className="join-button">Join</button>
                </div>
            </div> */}
      <div class="container-fluid p-0">
    <div class="row">
      <div class="col">
        <h2 class="text-center">Gartner Finance Webinars</h2>
        <div class="iframe-container">
          <iframe title="Gartner Finance Webinars" src="https://www.townscript.com/in/india/startup" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Webinars;
