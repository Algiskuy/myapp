import React, { Fragment } from "react";
import "./login.css";
import { Link } from "react-router-dom";
// import Header from "../../Component/header";

const Login = () => {
  return (
    <Fragment>
      <div className="login">
        <div className="loginleft">
          <h1>ReactJS</h1>{" "}
          <h2>
            React JS adalah sebuah pustaka/library javascript yang bersifat open
            source untuk membangun User Interface yang dibuat oleh Facebook.
            React JS hanya mengurusi semua hal yang berkaitan dengan tampilan
            dan logika di sekitarnya.
          </h2>
        </div>
        <div className="login1">
          <div className="login2">
            <input type="id" placeholder="Email atau Nomor telpon"></input>
            <br />
            <input type="password" placeholder="Kata Sandi"></input>
            <button>LOGIN</button>
            <br />
            <br />
            <Link to="/Login">
              <h5>Lupa kata sandi?</h5>
            </Link>
            <hr />
            <Link to="../Register">Buat akun baru</Link>
          </div>
          <br />
          <b>
            <Link to="/" target="_blank">
              Buat Halaman
            </Link>
          </b>{" "}
          untuk selebriti, merek, atau bisnis.
        </div>
      </div>
    </Fragment>
  );
};

export default Login;

// {/* <Header /> */}
