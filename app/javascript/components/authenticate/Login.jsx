import React, { useState } from "react";
import loginImg from "../../../assets/images/login.svg";
import "./style.scss";
import { useAlert } from 'react-alert'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux'


const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const performValidation = () => {
    return name.length > 0 && password.length > 0;
  }
  const alert = useAlert();
  const handleSubmit = (event) => {
    event.preventDefault();
    const valid = performValidation();

    const data = {
      'user': {
        'name': name,
        'password': password
      }
    }

    if (valid) {
      const url = '/login';
      axios.post(url, data)
        .then(response => {

          console.log(response.data)
          if (response.data['status'] == 200) {
            props.setIsAuthenticated(true);
            console.log(props.isAuthenticated);
            history.push("/topics");
          } else {
            alert.show(response.data['message'])
          }
        });
    }

    else {
      alert.show('Incorrect username or password!')
    }
  }

  return (
    <form className="base-container" ref={props.containerRef}  onSubmit={handleSubmit}>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="name">Username</label>
            <input type="text" name="name" placeholder="username" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="submit" className="sub-btn">
          Login
          </button>
      </div>
    </form>
  );


}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    setIsAuthenticated: (value) => {
      dispatch({type:'SETAUTH', val:value});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
