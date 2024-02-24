import React, { useState } from 'react'
import "./Registerstyle.css";

function RegisterForm({ savestartup }) {

    const [input, setInput] = useState('');
    const [logo, setLogo] = useState(null);
    const [rev, setrev] = useState('');
    const [launch, setlaunch] = useState('');
    const [deta, setdeta] = useState('');

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
        savestartup(input, logo, rev, launch, deta);
        setInput('');
        setLogo(null);
        setrev('');
        setlaunch('');
        setdeta('');
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="title" style={{ color: 'Blue' }}>
                Register Startup
            </h1>
            <div className="input-group">
                <label className='lab'>Company Logo</label>
                <input
                    type='file'
                    accept='image/*'
                    // value={logo}
                    onChange={handleLogochange}
                    placeholder='Company Logo'
                    className='inp'
                />
            </div>
            <div className="input-group">
                <label className='lab'>Startup </label>
                <input
                    type="text"
                    // required
                    placeholder="Startup Name"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='inp'
                />
            </div>
            <div className="input-group">
                <label className='lab'>Revenue</label>
                <input
                    type="text"
                    name="password"
                    value={rev}
                    onChange={(e) => setrev(e.target.value)}
                    required
                    placeholder='Company Revenue'
                    className='inp'
                />
            </div>
            <div className="input-group">
                <label className='lab'>Establishment</label>
                <input
                    type="text"
                    name="password"
                    value={launch}
                    onChange={(e) => setlaunch(e.target.value)}
                    required
                    placeholder='Start Date'
                    className='inp'
                />
            </div>
            <div className="input-group">
                <label className='lab'>Details</label>
                <input
                    type="text"
                    name="password"
                    value={deta}
                    onChange={(e) => setdeta(e.target.value)}
                    required
                    placeholder='Others Details'
                    className='inp'
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default RegisterForm