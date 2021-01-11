import React, { useState } from "react";
import loginImg from "../../../assets/images/login.svg";
import "./style.scss";
import { useAlert } from 'react-alert'
import axios from 'axios';
import { Redirect, withRouter, useHistory } from 'react-router-dom';
import { connect } from 'react-redux'

const Register = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const alert = useAlert();
  const performValidation = () => {
    return name.length > 0 && password.length > 6;
  }
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
      const url = '/api/v1/users';
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
      alert.show('Enter a valid string for username and password (password of atleast 8 characters.)!')
    }
  }


  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Register</div>
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
        <button type="button" className="sub-btn" onClick={handleSubmit}>
          Register
          </button>
      </div>
    </div>
  );

}


const mapStateToProps = state => {
  return {
    isAuthenticated: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setIsAuthenticated: () => {
      dispatch({ type: 'SET' });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
