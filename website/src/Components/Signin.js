import React, { useState } from "react";

import google from "../assets/google.png";
import mail from "../assets/mail.png";
import password from "../assets/password.png";

export function Signin() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  function signIn() {
    console.log(userDetails);
  }

  return (
    <div className="user-inputs">
      <div className="input-container">
        <img src={mail} alt="" />
        <input
          className="input"
          type="email"
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              email: e.target.value,
            })
          }
          placeholder="Email"
          name=""
          value={userDetails.email}
          id=""
        />
      </div>

      <div className="input-container">
        <img src={password} alt="" />
        <input
          className="input"
          type="password"
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              password: e.target.value,
            })
          }
          placeholder="Password"
          name=""
          value={userDetails.password}
          id=""
        />
      </div>

      <div className="links">
        <span>Forgot Password?</span>
      </div>

      <button className="signin" onClick={signIn}>Sign in</button>

      <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
        <hr style={{ flex: 1, width: "320px" }} />
        <span style={{ margin: "0 10px" }}>OR</span>
        <hr style={{ flex: 1 }} />
      </div>

      <button className="google-btn">
        <img src={google} alt="" />
        Sign in with Google
      </button>
    </div>
  );
}
