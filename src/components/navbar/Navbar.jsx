import React from 'react'
import "./Navbar.css"


export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container px-5">
                    <a class="navbar-brand" href="index.html">Ayush-Bharat</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="about.html">Startup</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact.html">Investor</a></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Resources</a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                    <li><a class="dropdown-item" href="blog-home.html">News</a></li>
                                    <li><a class="dropdown-item" href="blog-post.html">Connect Us</a></li>
                                    <li><a class="dropdown-item" href="blog-post.html">FAQs</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="pricing.html">Help?</a></li>
                            <li class="nav-item"><a class="nav-link" href="faq.html">Login</a></li>
                             
                        </ul>
                    </div>
                </div>
            </nav>

    )
}
