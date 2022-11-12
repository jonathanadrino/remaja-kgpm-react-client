import React from "react";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
const data = [
  {
    imgUrl: "https://img.youtube.com/vi/ZTA2hg6Tlo8/maxresdefault.jpg",
  },
  {
    imgUrl: "https://img.youtube.com/vi/zhOL5t0FoqQ/maxresdefault.jpg",
  },
  {
    imgUrl: "https://img.youtube.com/vi/MLXptE6iDuw/maxresdefault.jpg",
  },
  {
    imgUrl: "https://img.youtube.com/vi/5BvwME1XcUc/maxresdefault.jpg",
  },
];

function goToVideo(id) {
    window.location.href = `https://www.youtube.com/watch?v=${id}`
}



const Media = () => {
    const [videos, setVideos] = useState([])
  useEffect(() => {
    axios({
        method: 'GET',
        url: 'http://localhost:3000/media',
        headers: {
            access_token: localStorage.getItem('access_token')
        } 
    })
    .then((res) => {
        setVideos(res.data.data);
    })
    .catch((err) => {
        console.log(err)
    })
  }, []);

  if (videos.length == 0) {
    return <div>loading</div>
  }

  return (
    <>
      <div className="mt-5 pt-5 container">
        <div>
          <div className="d-flex justify-content-center">
            <h1
              className="komisi-title px-3 py-1"
              style={{ border: "3px solid" }}
            >
              MEDIA
            </h1>
          </div>
        </div>
        <div className="my-3">
          {videos.map((e) => {
            return (
              <div
                class="card mt-4"
                style={{ borderRadius: "7px", border: "1px solid silver" }}
              >
                <div class="d-flex">
                  <div class="img-square-wrapper">
                    <img
                      class=""
                      src={e.thumbnail}
                      alt="Card image cap"
                      style={{ width: "19rem", height: "12rem" , objectFit: 'cover'}}
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">{e.title}</h4>
                    <p class="card-text">
              {e.tanggal}
                    </p>
                    <div
                      className="d-flex align-items-end justify-content-center mt-5"
                      style={{ width: "100%" }}
                    >
                      <Button onClick={() => goToVideo(e.link)}>View video</Button>
                    </div>
                  </div>
                </div>
                <div class="card-footer" style={{ border: "0px" }}>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Media;
