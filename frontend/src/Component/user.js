import React, { useState } from "react";
import "./user.css";
import axios from "axios";

function User() {
  const [email, setEmail] = useState();
  const [password, setPass] = useState();
  const [username, setUsername] = useState();
  const [confirmPass, setConfrimPass] = useState();

  const handleSetUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPass(e.target.value);
  };

  const setConfrimPassword = (e) => {
    setConfrimPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "http://localhost:8080/users",
      data: {
        username,
        confirmPass,
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        error = new Error();
      });
  };
  return (
    <div className="volunteer">
      <div className="elidah">
        <h1>Volunteer With Us</h1>
      </div>

      <div class="signupFrm">
        <form action="" class="form" onSubmit={handleSubmit}>
          <h1 class="title">Sign up</h1>

          <div class="inputContainer">
            <input
              type="text"
              class="input"
              placeholder="a"
              onChange={handleSetEmail}
            ></input>
            <label for="" class="label">
              Email
            </label>
          </div>

          <div class="inputContainer">
            <input
              type="text"
              class="input"
              placeholder="a"
              onChange={handleSetUsername}
            ></input>
            <label for="" class="label">
              Username
            </label>
          </div>

          <div class="inputContainer">
            <input
              type="text"
              class="input"
              placeholder="a"
              onChange={handleSetPassword}
            ></input>
            <label for="" class="label">
              Password
            </label>
          </div>

          <div class="inputContainer">
            <input
              type="text"
              class="input"
              placeholder="a"
              onChange={setConfrimPassword}
            ></input>
            <label for="" class="label">
              Confirm Password
            </label>
          </div>
          <button type="submit" onClick={(e)=>handleSubmit(e)}>Sign Up</button>

          {/* <input type="submit" class="submitBtn" value="Sign up"></input> */}
        </form>
      </div>
    </div>
  );
}

export default User;
