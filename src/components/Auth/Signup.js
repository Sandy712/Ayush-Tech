import React, { useState} from 'react';
import "./Signup.css";
import { NavLink} from "react-router-dom";


const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(''); // State for selected role
    const [emailError, setEmailError] = useState('');


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);

            const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            setEmailError(emailRegex.test(value) ? '' : 'Invalid email format');
        } else if (name === 'password') {
            setPassword(value);
        }
        else if (name === "role") {
            setRole(name);
        }
    };

    const handleSignup = () => {
        if (emailError) {
            return;
        }

        const userData = { email, password, role };
        const usersData = JSON.parse(localStorage.getItem('users')) || [];
        usersData.push(userData);

        localStorage.setItem('users', JSON.stringify(usersData));
    };

    return (
        <div className="main">

            <div className="signup-container">
                <h1>Sign Up</h1>
                <div className="input-group">
                    <label className='lab'>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        required
                        placeholder='Enter Your Email'
                        className='inp'
                    />
                    <div className="error-message text-danger">{emailError}</div>
                </div>
                <div className="input-group">
                    <label className='lab'>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        required
                        placeholder='Enter Your Password'
                        className='inp'
                    />
                </div>
                <div className="input-group">
                    <label className='lab'>Role:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="">Select a role</option>
                        <option value="startup">Startup</option>
                        <option value="investor">Investor</option>
                        <option value="public">Public</option>
                    </select>
                </div>
                <NavLink to='/login' onClick={handleSignup}>Sign up</NavLink>

                {/* <Link>
                    <button className="signup-button" onClick={handleSignup}>
                        Sign Up
                    </button>
                </Link> */}
            </div>
        </div>
    );
};

export default Signup;