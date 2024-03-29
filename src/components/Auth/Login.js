import React, { useContext, useState } from "react";
import { DataContainer } from "../../App";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
// import logo from '../Images/logoicon.png';

const Login = () => {
    const { usersData, setLoggedIn, setcurrent_user } = useContext(DataContainer);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // console.log(localStorage.getItem('users'));

        // Find the user in the stored signup data based on the email
        const user = usersData.find((user) => user.email === email);

        if (!user) {
            setError("User not found. Please sign up first.");
            return;
        }

        if (user.password !== password) {
            setError("Invalid password. Please try again.");
            return;
        }

        // If email and password match, set the user as logged in
        setcurrent_user(user.role);
        setLoggedIn(true);

        navigate('/');
    };

    return (

        <div className="main">

            <div className="login-container">
                <h1 className="d-flex ">Login
                    {/* <img src={logo} className='login-img' alt="" /> */}
                </h1>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleLogin}>


                    <div className="input-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter Your Email"
                        />
                    </div>
                    <div className="input-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter Your Password"

                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                <p className="mt-3">
                    Don't Have An Account Yet
                    <span>
                        <NavLink to="/signup">Sign-up</NavLink>
                    </span>{" "}
                </p>
            </div>
        </div>

    );
};

export default Login;