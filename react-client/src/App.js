import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PrivateRoutes from "./utilities/PrivateRoutes";
import LoginRoute from "./utilities/LoginRoute";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AppNav from "./components/AppNav/AppNav";
import Home from "./pages/Home/Home";
import Komisi from "./pages/Komisi/Komisi";
import Berita from "./pages/Berita/Berita";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import CreatePost from "./pages/CreatePost/CreatePost";
import DetailPost from "./pages/DetailPost/DetailPost";
import EditPost from "./pages/EditPost/EditPost";
import Media from "./pages/Media/Media";
import CreateMedia from "./pages/CreateMedia/CreateMedia";
function App() {
  const [authentication, setAuththentication] = useState(false);

  function checkToken() {
    if (localStorage.getItem("access_token")) {
      setAuththentication(true);
    } else {
      setAuththentication(false);
    }

    console.log(authentication, "auth ni");
  }

  function logout() {
    localStorage.clear()
    setAuththentication(false)
  }

  useEffect(() => {
    checkToken();
  }, [authentication]);
  return (
    <div className="container-fluid" style={{ padding: "0px" }}>
      <AppNav auth={authentication} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/komisi" element={<Komisi />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/media" element={<Media />} />
        <Route path="/berita/:id" element={<DetailPost />} />

        <Route element={<LoginRoute auth={authentication} />}>
          <Route
            path="/login"
            element={<Login loggedIn={() => setAuththentication(true)} />}
          />
        </Route>

        <Route element={<PrivateRoutes auth={authentication} />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/createpost" element={<CreatePost />} />
          <Route path="/admin/createmedia" element={<CreateMedia />} />
          <Route path="/admin/editpost/:id" element={<EditPost />} />
        </Route>
      </Routes>
      <Footer auth={authentication} logout={logout}/>
    </div>
  );
}

export default App;
