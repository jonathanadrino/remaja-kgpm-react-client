import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Footer = ({ auth,logout }) => {
  return (
    <div className="mt-5">
      <footer className="footer-07">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <p className="menu">
                <h5>OUR SOCIAL MEDIA</h5>
                <section className="mb-4">
                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="https://web.facebook.com/profile.php?id=100070952627736"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>

                  <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="https://www.instagram.com/komisiremajakgpm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </section>
              </p>
              <h5 className="footer-heading">
                <h5 href="#" className="logo">
                  © KOMISI REMAJA KGPM 2022
                </h5>
              </h5>
              {auth ? 
                null
               : 
                <Link to="/login">Admin Login</Link>
              }
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
