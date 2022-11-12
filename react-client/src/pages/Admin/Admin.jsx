import React from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const baseURL = "http://localhost:3000";
const Admin = ({ auth }) => {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const [media, setMedia] = useState([]);
  const [error, setError] = useState(false);

  const edit = (id) => {
    navigate(`/admin/editpost/${id}`);
  };

  const deleteMedia = (id) => {
    axios({
      method: "DELETE",
      url: `${baseURL}/media/${id}`,
      headers: { access_token: localStorage.getItem("access_token") },
    })
      .then((res) => {
        setMedia(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const delPost = (id) => {
    axios({
      method: "DELETE",
      url: `${baseURL}/post/${id}`,
      headers: { access_token: localStorage.getItem("access_token") },
    })
      .then((res) => {
        setPost(res.data.newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(auth);
  }, []);

  useEffect(() => {
    axios
      .get(`${baseURL}/post`)
      .then((response) => {
        console.log(response.data);
        let temp = [];

        for (let i = 0; i < response.data.length; i++) {
          temp.push(response.data[i]);
        }

        setPost(temp);
      })
      .then(() => {
        axios.get(`${baseURL}/media`).then((response) => {
          console.log(response.data);

          setMedia(response.data.data);
        });
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  if (!post.length && !media.length) {
    return <div className="mt-5 pt-5">loading</div>;
  }

  if (error) {
    return (
      <div className="mt-5 pt-5">
        <h1>SOMETHING WENT WRONG</h1>
      </div>
    );
  }

  return (
    <div className="mt-5 pt-5 container">
      <div className="d-flex justify-content-center">
        <Button onClick={() => navigate("/admin/createpost")} className="mx-1">
          Create Post
        </Button>
        <Button onClick={() => navigate("/admin/createmedia")} className="mx-1">
          Create Media
        </Button>
      </div>

      <div className="mt-3">
        <div className="d-flex justify-content-center">
          <h1>Post</h1>
        </div>
        <Table striped bordered hover className="mb-5 mt-3">
          <thead>
            <tr>
              <th className="text-center">id</th>
              <th className="text-center">Judul</th>
              <th className="text-center">Yg isi</th>
              <th className="text-center">Yg robah</th>
              <th className="text-center">Mo</th>
            </tr>
          </thead>
          <tbody>
            {post.map((e) => {
              return (
                <tr>
                  <td className="text-center">{e.id}</td>
                  <td>{e.title}</td>
                  <td className="text-center">{e.addedBy}</td>
                  <td className="text-center">
                    {e.modifiedBy ? e.modifiedBy : "blum ada"}
                  </td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <Button
                        size="sm"
                        onClick={() => edit(e.id)}
                        variant="primary"
                        style={{ borderRadius: "0px" }}
                        className="mx-1"
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        style={{ borderRadius: "0px" }}
                        className="mx-1"
                        onClick={() => delPost(e.id)}
                      >
                        Hapus
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div>
        <div className="d-flex justify-content-center">
          <h1>Media</h1>
        </div>
        <Table striped bordered hover className="mb-5 mt-3">
          <thead>
            <tr>
              <th className="text-center">id</th>
              <th className="text-center">Judul</th>
              <th className="text-center">Link</th>
              <th className="text-center">Thumbnail</th>
            </tr>
          </thead>
          <tbody>
            {media.map((e) => {
              return (
                <tr>
                  <td className="text-center">{e.id}</td>
                  <td>{e.title}</td>
                  <td className="text-center">{e.thumbnail}</td>

                  <td>
                    <div className="d-flex justify-content-center">
                      <Button
                        size="sm"
                        variant="danger"
                        style={{ borderRadius: "0px" }}
                        className="mx-1"
                        onClick={() => deleteMedia(e.id)}
                      >
                        Hapus
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Admin;
