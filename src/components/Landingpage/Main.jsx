import React from 'react';
import "./Main.css";


export default function Main() {
    return (
        <>
            <div className="container">
                <div className="half">
                    <div className="firsthalf">
                        <h1 className="title">Find You Next Investment</h1>
                        <p className="desc">
                            Identify high-growth startups and industry trens so yo know where to invest.
                        </p>
                        <button>Click</button>
                    </div>
                    <div className="secondhalf">
                        <div className="item">
                            <img src="/img/fin1.png" alt="find investor" className='find-img' />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="half">
                    <div className="firsthalf">
                        <h1 className="title">Find Startups to Invest In</h1>
                        <p className="desc">
                        Uncover new investment opportunities with access to over 2 million companies, unlimited advanced search, and personalized recommendations.
                        </p>
                        <button>Click</button>
                    </div>
                </div>
                <div className="secondhalf">
                    <div className="item">
                        <img src="/img/fin2.png" alt="find investor" className="find-img" />
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="half">
                    <div className="firsthalf">
                        <h1 className="title">Monitor Industry Trends</h1>
                        <p className="desc">
                        Stay up to date on hot startups and see where others are investing with company insights and news.
                        </p>
                        <button>Click</button>
                    </div>
                    <div className="secondhalf">
                        <div className="item">
                            <img src="/img/fin3.png" alt="find investor" className="find-img" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
