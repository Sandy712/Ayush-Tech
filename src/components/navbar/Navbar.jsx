import React from 'react'



export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navtop" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Startup
                            </a>
                            <ul className='dropdown-menu'>
                                <li><a className="dropdown-item" href="/">Startup Pro.</a></li>
                                <li><a className="dropdown-item" href="/">Startup Details</a></li>
                                <li><a className="dropdown-item" href="/">Connect Us</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Investor
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="/">Find Inv.</a></li>
                                <li><a className="dropdown-item" href="/">Retail Inv.</a></li>
                                <li><a className="dropdown-item" href="/">FAQs</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="/">Community</a></li>
                                <li><a className="dropdown-item" href="/">Learn/Webinar</a></li>
                                <li><a className="dropdown-item" href="/">News</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
