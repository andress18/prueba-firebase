import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import app from './firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const auth = getAuth(app);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Usuario autenticado exitosamente!');
    } catch (error) {
      alert('Error al autenticar: ', error.message);
    }
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container mt-5">
          <div className="row justify-content-center">
            <p>Iniciar sesion firebase</p>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="password" className="form-label">Contraseña</label>
                      <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
