import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import UNDVD from "../../components/UNDVD/UNDVD";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'

const data = [
  {
    title: "Remaja KGPM berprestasi 2022",
    imgUrl:
      "http://www.monitorsulut.com/wp-content/uploads/2022/05/IMG-20220524-WA0028.jpg",
      highlight: 'asd'
  },
  {
    title: "Remaja KGPM berprestasi 2022",
    imgUrl:
      "http://www.monitorsulut.com/wp-content/uploads/2022/05/IMG-20220524-WA0028.jpg",
      highlight: 'asd'
  },
  {
    title: "Remaja KGPM berprestasi 2022",
    imgUrl:
      "http://www.monitorsulut.com/wp-content/uploads/2022/05/IMG-20220524-WA0028.jpg",
      highlight: 'asd'
  },
  {
    title: "MARS Remaja KGPM",
    imgUrl: "https://i.ytimg.com/vi/RplYEAxB3OM/maxresdefault.jpg",
    highlight: 'asd'
  },
  {
    title: "MARS Remaja KGPM",
    imgUrl: "https://i.ytimg.com/vi/RplYEAxB3OM/maxresdefault.jpg",
    highlight: 'asd'
  },
  {
    title: "MARS Remaja KGPM",
    imgUrl: "https://i.ytimg.com/vi/RplYEAxB3OM/maxresdefault.jpg",
    highlight: 'asd'
  }
];



const Home = () => {
  const [post,setPost] = useState([])
  const navigate = useNavigate()
  const handleClickPost = (id) => {
    navigate(`/berita/${id}`)
  }

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
    <div className="container-fluid mt-5 pt-3" style={{ padding: "0px" }}>
      <section
        style={{ width: "100%", padding: "0px" }}
        className="overflow-hidden my-2"
      >
        <Carousel images={post}/>
      </section>
      <section>
        <UNDVD/>
      </section>
      <section
        style={{ width: "100%", padding: "0px" }}
        className="mx-auto"
      >
        <div className="my-5 d-flex justify-content-center">
          <h1 className='px-3 pb-1 news-title' style={{border: '3px solid'}}>BERITA & INFORMASI</h1>
        </div>
        <div className="row mt-3 justify-content-center">
          {post.map((e) => {
            return (
              <Card style={{ width: "22rem" }} className="card-item mt-5 mx-3 news-card" key={e.id}>
                <div className="overflow">
                  <img
                    variant="top"
                    src={e.imgUrl}
                    className="my-1"
                    style={{
                      height: "300px",
                      width: "100%",
                      borderRadius: "0px",
                      objectFit: "cover",
                      padding: '0px'
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title style={{height:'60px'}}>{e.title} </Card.Title>
                  <Card.Text>
                    {e.highlight.length > 50
                      ? `${e.highlight.substring(0, 50)}........`
                      : e.highlight}
                  </Card.Text>
                  <div>
                  <Button size="sm" variant="primary" className='disabled my-2' style={{borderRadius: '0px'}}>{e.addedBy} </Button>
                  </div>
                  <Button variant="outline-dark" style={{borderRadius: '0px'}} onClick={() => handleClickPost(e.id)}>
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
