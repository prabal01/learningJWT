import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export function DivCard() {
  const [uname, setUname] = useState("");
  const [pword, setPword] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [states, setStates] = useState("");
  const [city, setCity] = useState("");
  const [token, setToken] = useState("");

  const [loggedIn, setLoggedIn] = useState(true);

  const unameHandler = (e) => {
    setUname(e.target.value);
  };

  const pwordHandler = (e) => {
    setPword(e.target.value);
  };

  const buttonClickHandler = (e) => {
    if (uname == "" && pword == "") {
      return false;
    }
    axios
      .post(`http://localhost:8000/login?uname=${uname}&pword=${pword}`)
      .then((data) => {
        console.log(data.data);
        if (data.data["msg"] == undefined) {
          setLoggedIn(false);
          setName(data.data["user"]["name"]);
          setEmail(data.data["user"]["email"]);
          setStates(data.data["user"]["state"]);
          setCity(data.data["user"]["city"]);
          setToken(data.data["token"]);
        } else {
          alert(data.data["msg"]);
        }
      });
  };

  return (
    <div className="divCard">
      {loggedIn ? (
        <div className="formDiv" id="fd">
          <h1>Login Page</h1>
          <div className="inputFields">
            <input
              onChange={(e) => unameHandler(e)}
              type="text"
              placeholder="Username"
            />
            <input
              onChange={(e) => pwordHandler(e)}
              type="password"
              placeholder="Password"
            />
          </div>
          <button onClick={(e) => buttonClickHandler(e)}>Login</button> <br />
          <p>
            dont have a account? <Link to="/register">create now</Link>
          </p>
        </div>
      ) : (
        <div>
            <center><h2>Login Successful</h2></center>
            <h3>User Details</h3>
          <table id={"table"}>
            <tbody>
              <tr>
                <td><b>Username:</b></td>
                <td>{uname}</td>
              </tr>
              <tr>
                <td><b>Name:</b></td>
                <td>{name}</td>
              </tr>
              <tr>
                <td><b>Email:</b></td>
                <td>{email}</td>
              </tr>
              <tr>
                <td><b>State:</b></td>
                <td>{states}</td>
              </tr>
              <tr>
                <td><b>City:</b></td>
                <td>{city}</td>
              </tr>
              <tr>
                <td><b>JWT Token:</b></td>
                <td id={"jwt"}>{token}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
