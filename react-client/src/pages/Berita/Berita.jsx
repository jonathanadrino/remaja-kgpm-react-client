import React from "react";
import { Button } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'
const data = [
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    highlight:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, labore.",
    author: "joshua",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    highlight:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, labore.",
    author: "joshua",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    highlight:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, labore.",
    author: "joshua",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    highlight:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, labore.",
    author: "joshua",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    highlight:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, labore.",
    author: "joshua",
  },
];
const Berita = () => {
  const [post,setPost] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/post").then((response) => {
      let temp = [];

      for (let i = 0; i < response.data.length; i++) {
        temp.push(response.data[i]);
      }

      setPost(temp);
    });
  }, []);
  return (
    <>
    <div className="mt-5 pt-5 container">
      <div>
        <div className="d-flex justify-content-center">
          <h1
            className="komisi-title px-3 py-1"
            style={{ border: "3px solid" }}
          >
            BERITA & INFORMASI
          </h1>
        </div>
      </div>
      <div className="my-3">
        {post.map((e) => {
          return (
            <div class="card mt-4" style={{ borderRadius: "0px", border: '1px solid silver'}}>
              <div class="d-flex">
                <div class="img-square-wrapper">
                  <img
                    class=""
                    src={e.imgUrl}
                    alt="Card image cap"
                    style={{height: '15rem', width: '20rem', objectFit: 'cover'}}
                  />
                </div>
                <div class="card-body" style={{backgroundColor: '#f0f9ff'}}>
                  <h4 class="card-title">{e.title}</h4>
                  <p class="card-text">
                    {e.highlight}
                  </p>
                  <div
                    className="d-flex align-items-end justify-content-center mt-5"
                    style={{ width: "100%" }}
                  >
                    <Button>Read more</Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Berita;
