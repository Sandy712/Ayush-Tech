import React from "react";
import "./Main.css";
import img from "../Landingpage/image/main-vector-removebg-preview.png";

export default function Main() {
  return (
    <header class="bg-dark py-5">
      <div class="container px-5">
        <div class="row gx-5 align-items-center justify-content-center">
          <div class="col-lg-8 col-xl-7 col-xxl-6">
            <div class="my-5 text-center text-xl-start">
              <h1 class="display-5 fw-bolder text-white mb-2">
                Ayush Bharat
              </h1>
              <h1 class=" display-5 lead fw-normal text-white-50 mb-4">
                Startup India Platform
              </h1>
              <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#features">
                   For Investor
                </a>
                <a class="btn btn-outline-light btn-lg px-4" href="#!">
                  For Startup
                </a>
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
            <img
              class="img-fluid rounded-3 my-5"
              src={img}
              alt="..."
            />
          </div>
        </div>
      </div>
    </header>
  );
}
