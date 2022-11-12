import "./AppNav.css";
import logo from "./logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function AppNav({ auth, logout }) {
  const navigate = useNavigate();
  return (
    <Navbar
      expand="lg"
      className="shadow-sm fixed-top glass"
      style={{ width: "100vw" }}
    >
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="40px"
            height="40px"
            className="d-inline-block align-top rounded-circle shadow"
          />
        </Navbar.Brand>
        <Link to="/" className="align-self-center text-center nav-title">
          <div
            style={{
              margin: "auto",
              textDecoration: "none",
            }}
          >
            KOMISI REMAJA KGPM
          </div>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className="navbar__link" to="/">
              HOME
            </NavLink>
            <NavDropdown title="ORGANISASI" className="navbar__link">
              <NavDropdown.Item
                style={{ paddingBlock: "10px", borderRadius: "0px" }}
              >
                <NavLink
                  to="/komisi"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    borderRadius: "0px",
                  }}
                >
                  KOMISI
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ paddingBlock: "10px", borderRadius: "0px" }}
              >
                <NavLink
                  to="/divisikerja"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    borderRadius: "0px",
                  }}
                >
                  POKJA
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item
                style={{ paddingBlock: "10px", borderRadius: "0px" }}
              ></NavDropdown.Item>
            </NavDropdown>

            <NavLink className="navbar__link" to="/berita">
              BERITA
            </NavLink>
            <NavLink className="navbar__link" to="/media">
              MEDIA
            </NavLink>
            {auth ? (
              <div className="mx-3">
                <Button
                  variant="success"
                  style={{ borderRadius: "0px" }}
                  onClick={() => navigate("/admin")}
                >
                  Admin
                </Button>{" "}
                <Button
                  variant="danger"
                  style={{ borderRadius: "0px" }}
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              </div>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNav;
