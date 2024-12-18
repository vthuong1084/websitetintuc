import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useAuth } from "../layout/AuthProvider";
import { getAPI } from "../../services/api";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';

import './login.css';



const svClass = "LoginService";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { loginAsAdmin } = useAuth();
  const { loginAsUser } = useAuth();

  const do_login = async () => {
    localStorage.setItem("username", "Hoai");

    if (username === '' || password === '') {
      alert('username or password is empty')
    } else {
      const api = { svClass: svClass, userDTO: { username, password } };
      await getAPI(api).then(response => {
        if (!response.data.massage) {
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("avatar", response.data.avatar);
          if( response.data.role === 2){
            navigate('/admin')
            loginAsAdmin()
          }
          else{
            navigate('/')
            loginAsUser()
          }

        } else alert(response.data.massage)

      })
    }

  }

  return (
    <section className="container-login">
      <div className="form-login">

        <div className="title">
          <h1>SPEPO</h1>
          <p>Welcome back! Please enter your details.</p>
        </div>

        <div className="input-field">

          <input
            type="text"
            id="username"
            className="input-login-form"
            placeholder=""
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="username">Username</label>

        </div>

        <div className="input-field">

          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="input-login-form"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="password">Password</label>

          <div onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <VisibilityIcon id="show-hide-pass" /> : <VisibilityOffIcon id="show-hide-pass" />}
          </div>

        </div>

        <div className="remember-forgot row">
          <div className="col-6">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <div className="col-6"><p className="forgot-pass">Forgot Password</p></div>
        </div>

        <div className="loginBtn" onClick={do_login}>Login in</div>

        <span className="or">or</span>

        <div className="google-login">
          <EmailIcon /> Login with Google
        </div>

        <p className="signup"> Don't have an account? <Link to={'/register'}>Register here</Link></p>

      </div>
    </section>
  );
}

export default Login;