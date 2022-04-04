import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import "./register.css";
// import Header from "../../Component/header";

const Register = () => {
  return (
    <Fragment>
      <div className="register">
        <div className="register1">
          <h3>Daftar</h3>
          <div className="register2">
            <input
              className="inputnama"
              type="id"
              placeholder="Nama depan"
            ></input>
            <input
              className="inputnama"
              type="id"
              placeholder="Nama belakang"
            ></input>
            <br />
            <input
              className="inputdaftar"
              type="id"
              placeholder="Email atau Nomor seluler"
            ></input>
            <br />
            <input
              className="inputdaftar"
              type="password"
              placeholder="Kata sandi baru"
            ></input>
            <input
              className="inputdaftar"
              type="password"
              placeholder="Konfirmasi kata sandi baru"
            ></input>
            <br />
            <h5>Tanggal Lahir</h5>
            <div className="select">
              <select>
                <option> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
                <option> 5 </option>
                <option> 6 </option>
                <option> 7 </option>
                <option> 8 </option>
                <option> 9 </option>
                <option> 10 </option>
                <option> 11 </option>
                <option> 12 </option>
                <option> 13 </option>
                <option> 14 </option>
                <option> 15 </option>
                <option> 16 </option>
                <option> 17 </option>
                <option> 18 </option>
                <option> 19 </option>
                <option> 20 </option>
                <option> 21 </option>
                <option> 22 </option>
                <option> 23 </option>
                <option> 24 </option>
                <option> 25 </option>
                <option> 26 </option>
                <option> 27 </option>
                <option> 28 </option>
                <option> 29 </option>
                <option> 30 </option>
              </select>
              <select>
                <option>Januari</option>
                <option>Februari</option>
                <option>Maret</option>
                <option>April</option>
                <option>Mei</option>
                <option>Juni</option>
                <option>Juli</option>
                <option>Agustus</option>
                <option>September</option>
                <option>Oktober</option>
                <option>November</option>
                <option>Desember</option>
              </select>
              <select>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
                <option>2011</option>
                <option>2010</option>
                <option>2009</option>
                <option>2008</option>
                <option>2007</option>
                <option>2006</option>
                <option>2005</option>
                <option>2004</option>
                <option>2003</option>
                <option>2002</option>
                <option>2001</option>
                <option>2000</option>
                <option>1999</option>
                <option>1998</option>
                <option>1997</option>
                <option>1996</option>
                <option>1995</option>
                <option>1994</option>
                <option>1993</option>
                <option>1992</option>
                <option>1991</option>
                <option>1990</option>
              </select>
            </div>
            <br />
            <h5>Jenis kelamin</h5>
            <div className="label">
              <input type="radio" name="status" />
              <label>Pria</label>
              <input type="radio" name="status" />
              <label>Wanita</label>
              <input type="radio" name="status" />
              <label>Khusus</label>
            </div>
            <button>Daftar</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
