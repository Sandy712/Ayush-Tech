import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';


export default function Navbar({ current_user }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <Link className="navbar-brand" to='/'>Ayush-Bharat</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        {
                            current_user === 'startup' ?
                                <li className="nav-item"><Link className="/investor" to="">Investor</Link></li>
                                : <></>
                        }
                        {
                            current_user === 'investor' ?
                                <li className="nav-item"><Link className="nav-link" to="/startup">Startup</Link></li>
                                : <></>
                        }
                        {
                            current_user === 'public' ?
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownBlog" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Resources</a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                        <li><Link className="dropdown-item" to="/News"> News </Link></li>
                                        <li><Link className="dropdown-item" to="/Contact-Us">Connect Us</Link></li>
                                        <li><a className="dropdown-item" href="blog-post.html">FAQs</a></li>
                                    </ul>
                                </li>
                                : <></>
                        }
                        <li className="nav-item"><a className="nav-link" href="pricing.html">Help?</a></li>
                        <li className="nav-item"><Link className="nav-link" to='/login'>Login</Link></li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}
