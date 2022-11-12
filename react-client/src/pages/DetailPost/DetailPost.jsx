import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function DetailPost() {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const baseURL = "http://localhost:3000";
  useEffect(() => {
    axios.get(`${baseURL}/post/${id}`).then((response) => {
      console.log(response);
      setContent(response.data);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  if (content == null) {
    return (<div
      style={{ height: "100vh", width: "100vw" }}
        className="mt-5 pt-5 d-flex justify-content-center align-items-center"
      >
        Loading      </div>)
  }

  function NewlineText(text) {
    return text.replace(/\n/g, "\n");
  }
  return (
    <div className="my-5 pt-5 container d-flex">
      <div style={{width: '100%'}}>
        <h1>{content.title}</h1>
        <div className='d-flex justify-content-center'>
        <img src={content.imgUrl} style={{height: '50vh', width: '50vw', objectFit: 'contain'}} className='my-4'/>
        </div>
        <h4>{content.highlight}</h4>
        <p className="mt-5 text-body">{NewlineText(content.body)}</p>
      </div>
    </div>
  );
}

export default DetailPost;
