import React from "react";
import "./Main.css";
import img from "../Landingpage/image/main-vector-removebg-preview.png";
import { useSpring, animated,config} from '@react-spring/web';


export default function Main() {
  const imageSpring = useSpring({
    from: { transform: 'translateY(0px) scale(1)' },
    to: async next => {
      while (true) {
        await next({ transform: 'translateY(-17px) scale(1.05)' });
        await next({ transform: 'translateY(0px) scale(1)' });
      }
    },
    config: { tension: 3, friction: 0, easing: config.easeInOutCubic },
  });

  return (
    <header className="bg-dark py-5">
      <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <div className="my-5 text-center text-xl-start">
              <h1 className="display-5 fw-bolder text-white mb-2">
                Ayush Bharat
              </h1>
              <h1 className=" display-5 lead fw-normal text-white-50 mb-4">
                Startup India Platform
              </h1>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">
                  For Investor
                </a>
                <a className="btn btn-outline-light btn-lg px-4" href="#!">
                  For Startup
                </a>
              </div>
            </div>
          </div>
          <animated.div className="col-xl-5 col-xxl-6 d-sm-block d-xl-block text-center" style={imageSpring}>
            <img
              className="img-fluid rounded-3 "
              src={img}
              alt="..."
            />
          </animated.div>
        </div>
      </div>
    </header>
  );
}
