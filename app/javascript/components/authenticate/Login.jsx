import React, { useState } from "react";
import loginImg from "../../../assets/images/login.svg";
import "./style.scss";
import { useAlert } from 'react-alert'

const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const performValidation = () => {
    return name.length > 0 && password.length > 0;
  }
  const alert = useAlert();
  const handleSubmit = (event) => {
    const valid = performValidation();
    if (valid) {
      event.preventDefault();
      console.log(name);
      console.log(password);
    }
    else {
      alert.show('Incorrect username or password!')
    }
  }

  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="name">Username</label>
            <input type="text" name="name" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn" onClick={handleSubmit}>
          Login
        </button>
      </div> 
    </div>
  );
}

export default Login;
