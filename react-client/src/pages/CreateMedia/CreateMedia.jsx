import React from "react";
import { useState } from "react";
import axios from 'axios'

const CreateMedia = () => {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const submit = (e) => {
    e.preventDefault()
    axios({
      method: "POST",
      url: "http://localhost:3000/media",
      data: {url,title},
      headers: {access_token: localStorage.getItem('access_token')},
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }

  return (
    <div className="mt-5 pt-5 container" style={{ height: "100vh" }}>
      <div className="d-flex justify-content-center">
        <h1>Create Media</h1>
      </div>
      <div>
        <form className="mx-auto mt-5" style={{ width: "30rem" }} onSubmit={submit}>
          <div className="form-group my-3">
            <label for="exampleInputEmail1">
              Youtube URL {"(Copy + Paste dari url tab browser)"}
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Masukkan url video youtube"
              onChange={handleUrlChange}
            />
          </div>
          <div className="form-group my-3">
            <label for="exampleInputPassword1">
              Judul video {"(Copy + Paste dari judul video di channel remaja)"}
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Masukkan judul video youtube"
              onChange={handleTitleChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMedia;
