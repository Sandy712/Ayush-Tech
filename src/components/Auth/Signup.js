import React, { useState } from 'react';
import "./Signup.css";
import { NavLink,Link, useNavigate } from "react-router-dom";
import "./Login.css"
 


const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(''); // State for selected role
    const [emailError, setEmailError] = useState('');
    const Navigate = useNavigate();


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
        if (email == '') {
             document.getElementById('Erroremail').innerHTML='Please Enter Your Email'
        }
        else{
            document.getElementById('Erroremail')
        }
         
         
        if (password == '') {
            document.getElementById('Passwordeorrr').innerHTML='Please Create Password'
        }
        else{

        }
         
        if(role=='',password == '',email == ''){
            document.getElementById('Typeerror').innerHTML='Please Select User Role'
        }
        else{
            
            Navigate('/login');
            
        }


    
        

        

        const userData = { email, password, role };
        const usersData = JSON.parse(localStorage.getItem('users')) || [];
        usersData.push(userData);

        localStorage.setItem('users', JSON.stringify(usersData));
    };

    return (
        <div className="main">
            <div className="signup-container">
                <h1 className="mb-4">Sign Up</h1>
                <div className="mb-3">
                    <label htmlFor="email" className='form-label'>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        required
                        placeholder='Enter Your Email'
                        className='form-control'
                    />
                    <div className="error-message text-danger" id='Erroremail'></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className='form-label'>Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        required
                        placeholder='Enter Your Password'
                        className='form-control'
                    />
                    <div className="error-message text-danger" id='Passwordeorrr'></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="role" className='form-label'>Role:</label>
                    <select id="role" value={role} onChange={(e) => setRole(e.target.value)} className='form-select'>
                        <option value="">Select a role</option>
                        <option value="startup">Startup</option>
                        <option value="investor">Investor</option>
                        <option value="public">Public</option>
                    </select>
                    <div className="error-message text-danger" id='Typeerror'></div>
                </div>
                <button onClick={handleSignup} className="btn btn-primary">Sign up</button>
                <span><div className='mt-2' >Have an Account: <span className='btn btn-primary'><Link className='text-white' style={{textDecoration:'none'}} to='/login'>SignIn</Link></span> </div></span>  
            </div>
            
        </div>
    );
};

export default Signup;