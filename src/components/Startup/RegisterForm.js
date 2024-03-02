import React, { useState, } from "react";
import "./Registerstyle.css";
import { Link } from "react-router-dom";


function RegisterForm({ savestartup }) {
  const [input, setInput] = useState("");
  const [logo, setLogo] = useState(null);
  const [rev, setrev] = useState("");
  const [launch, setlaunch] = useState("");
  const [date, setdate] = useState("");

  const handleLogochange = (e) => {
    const file = e.target.files[0];
    setLogo(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!logo) {
      console.log("Please select a logo");
      return;
    }
    savestartup(input, logo, rev, launch, date);
    setInput("");
    setLogo(null);
    setrev("");
    setlaunch("");
    setdate("");
    e.target.reset();
    document.getElementById(
      "submitted"
    ).innerHTML = `                <div className="Container-fluid">
        <h2>Thank you, submission of<div style='color:'green';'>${input}</div>successful!</h2>
        <p>We will connect with you soon <i class="fa fa-envelope me-2"></i></p>
         
    </div>`;
  };

  return (
    <form onSubmit={handleSubmit} id="submitted">
      <h1 className="title" style={{ color: "Blue" }}>
        Register Startup
      </h1>
      <div className="input-group">
        <label className="lab">Company Logo</label>
        <input
          type="file"
          accept="image/*"
          // value={logo}
          onChange={handleLogochange}
          placeholder="Company Logo"
          className="inp"
        />
      </div>
      <div className="input-group">
        <label className="lab">Startup </label>
        <input
          type="text"
          // required
          placeholder="Startup Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="inp"
        />
      </div>
      <div className="input-group">
        <label className="lab">Revenue</label>
        <input
          type="number"
          name="password"
          value={rev}
          onChange={(e) => setrev(e.target.value)}
          required
          placeholder="Company Revenue"
          className="inp"
        />
      </div>
      <div className="input-group">
        <label className="lab">Establishment</label>
        <input
          type="Date"
          value={launch}
          onChange={(e) => setlaunch(e.target.value)}
          required
          placeholder="Start Date"
          className="inp"
        />
      </div>
      <div className="input-group">
        <label className="lab">Details</label>
        <textarea
          type="text"
          value={date}
          onChange={(e) => setdate(e.target.value)}
          required
          placeholder="Others Details"
          className="inp"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegisterForm;
