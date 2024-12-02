import "./Footer.css";
export default function Footer() {
  return (
    <div className="MainFooter">
      <div className="cards d-flex gap-lg-5 p-lg-5 justify-content-center align-content-center">
        <div className="card1">
          <div className="Logo">
            <img src="/src/Img/Logo.png" alt="" style={{ width: "10rem" }} />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="card2">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Leadership</li>
            <li>Careers</li>
            <li>Partner</li>
            <li>News & Article</li>
          </ul>
        </div>
        <div className="card3">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Ticket Support</li>
          </ul>
        </div>
        <div className="card4">
          <h4>Contact Info</h4>
          <div className="location p-1">
            <img
              src="/src/Img/icons8-location-50.png"
              alt=""
              style={{ width: "30px" }}
            />
            <a
              className=" text-decoration-none p-1"
              href="https://maps.app.goo.gl/oSdPqCi5qpuTiynC8"
            >
              First 6th of October, Elmotamyez
            </a>
          </div>
          <div className="E-mail p-1">
            <img
              src="/src/Img/icons8-mail-50.png"
              alt=""
              style={{ width: "30px" }}
            />
            <a className=" text-decoration-none p-1" href="">
              florida_dryclean@gmail.com
            </a>
          </div>
          <div className="whatsapp p-1">
            <img
              src="/src/Img/icons8-whatsapp-50.png"
              alt=""
              style={{ width: "30px" }}
            />
            <a
              className="text-decoration-none p-1"
              href="https://api.whatsapp.com/send?phone=201015085790&text&context=ARBfbpGELmXy10MtYxaUC-pKEY6nrLEun-exzeP5gs-P_ddle46oWy-Novbfusw1S9XsopmfpCPUBnu-npvg_AYbef0E1zgyjuLWeFVRMj6xsjwEiasxJ7Vy3MAsk8Ny31F5jqagbRpcOmZ0Gy0IwyarLA&source&app=facebook"
            >
              01015085790
            </a>
          </div>
          <div className="E-mail p-1">
            <img
              src="/src/Img/icons8-facebook-logo-50.png"
              alt=""
              style={{ width: "30px" }}
            />
            <a
              className=" text-decoration-none p-1"
              href="https://www.facebook.com/profile.php?id=100095178824127&mibextid=ZbWKwL"
            >
              florida_dryclean@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="last d-flex justify-content-between p-5">
        <img
          src="/src/Img/Payment-Icon-pfg8lgarqhvoy0kca0mx7xc8v1t0j0jqj9tesl9gcg.png"
          alt=""
        />
        <p>
          Copyright © 2024 Florida, All rights reserved. Powered by Ahmed
          Farouk.
        </p>
      </div>
    </div>
  );
}
