import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Login = ({ loggedIn }) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const login = (e) => {
    e.preventDefault();
    axioslogin();
  };

  const axioslogin = async () => {
    try {
      Swal.fire({
        title: "Loading",
      });
      Swal.showLoading();
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/login",
        data: {
          username: username,
          password: password,
        },
      });
      console.log(response);
      console.log(response.data);

      localStorage.setItem("access_token", response.data.access_token);
      loggedIn();
      navigate("/admin");
    
        Swal.fire("Oke maso", " ", "success");
        Swal.hideLoading();
    
    } catch (err) {
      console.log(err);
     
        Swal.fire("Error", err.response.data.message, "error");
        Swal.hideLoading();
    
    }
  };

  return (
    <div className="mt-5">
      <section className="vh-100">
        <div className="container py-5 h-100" style={{width: '25rem'}}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card login-form" style={{ borderRadius: "0px" }}>
                <div className="row g-0">

                  <div className="col-md-12 col-lg-12 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={login}>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Admin Login
                        </h5>

                        <div className="form-outline mb-4">
                          <label className="form-label" for="form2Example17">
                            Username
                          </label>
                          <input
                            type="text"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            style={{borderRadius: '0px'}}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" for="form2Example27">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            onChange={(e) => setPassword(e.target.value)}
                            style={{borderRadius: '0px'}}
                          />
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
