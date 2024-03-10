// Your main React component

import React from 'react';
import './webinarscs.css'; // Import your CSS file
import  webinarsdata from './webdata'; // Import your webinar data

const Webinars = () => {
    return (
        <div className='container'>
            <h1 className='mb-4'>Webinars</h1>
            <div className='row'>
                {webinarsdata.map((webinar, index) => (
                    <div className="col-lg-4 mb-4" key={index}>
                        <div className="webinar-card">
                            <h3 className='h5 card-title mb-3'>{webinar.title}</h3>
                            <p className="date">{webinar.date}</p>
                            <p className="description">{webinar.description}</p>
                            <a href={webinar.registrationLink} className="btn-register" target="_blank" rel="noopener noreferrer">
                                Register Now
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Webinars;
