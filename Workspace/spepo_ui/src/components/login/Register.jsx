import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {getAPI} from "../../services/api";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import './register.css';

const isEmail = (email) => {
  const emailRegex = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/;
  return emailRegex.test(email);
}

const isPhone = (num) => {
  const regex = /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/;
  return regex.test(num);
}

const checkPassword = (pass, confirm) => {
  if (pass === confirm) {
    return true;
  }

  return false;
}

const Register = () => {
  const pages = document.getElementsByClassName('page');
  const progress = document.getElementsByClassName('progress-bar')

  let currentPage = 0;

  function showCurrentPage(index) {
    for (let i = 0; i < pages.length; i++) {
      if (i === index) pages.item(i).classList.add('active')
      else pages.item(i).classList.remove('active')
    }

    for (let i = 0; i < progress.length; i++) {
      if (i === index) progress.item(i).classList.add('current')
      else progress.item(i).classList.remove('current')
    }
  };

  function addProgress(index) {
    progress.item(index).classList.add('active')
  }

  function subProgress(index) {
    progress.item(index).classList.remove('active')
  }

  function handleNext() {
    currentPage++;
    showCurrentPage(currentPage);
    addProgress(currentPage);
  }

  function handlePrev() {
    currentPage--;
    showCurrentPage(currentPage);
    subProgress(currentPage);
  }

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [tel, setTel] = useState('');
  const [birthday, setBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const do_register = async () => {
    if (!email || !username || !tel || !birthday  || !password || !confirmPassword)  alert(' is empty')
    else if (!isEmail(email))                                                     alert('email invalid');
    else if (!isPhone(tel))                                                       alert('Phone number invalid');
    else if (!checkPassword(password, confirmPassword))                           alert('check password again');
    else {
      const api = { svClass: "RegisterService", userDTO: { username, password, status: 1, role: 1, email, tel, birthday } };
      await getAPI(api).then(response => {
        console.log("user: " + response.data);
        navigate('/login')
      });
    }
  }

  return (
    <section className="container-register">
      <div className="form-register">
        
        <div className="progress">
          <div className="progress-bar active current">
            <span>
              <MailOutlineIcon />
            </span>
          </div>
          <div className="progress-bar">
            <span>
              <PersonOutlineIcon />
            </span>
          </div>
          <div className="progress-bar ">
            <span>
              <img src="assets/password.svg" alt="" />
            </span>
          </div>
        </div>

        <div className="pages">
          <div className="page active">
            <h1>Let's get started</h1>
            <div className="field">

              <div className="field-input">
                <label className="label-register" htmlFor="email"><span>*</span>Email</label>
                <input 
                  type="email" 
                  className="input-register"
                  id="email" 
                  placeholder="ex: sample@email.com" 
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

              <div className="field-input">
                <label className="label-register" htmlFor="username"><span>*</span>Username</label>
                <input 
                  type="text" 
                  className="input-register"
                  id="username" 
                  placeholder="ex: gab613"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} 
                />

              </div>

            </div>

            <div className="btn">
              <button type="button" className="button-register" id="next-btn" onClick={handleNext}>
                <NavigateNextIcon />
              </button>
            </div>

          </div>

          <div className="page">
            <h1>Add a personal touch</h1>

            <div className="field">
              <div className="field-input">
                <label className="label-register" htmlFor="tel"><span>*</span>Number Phone</label>
                <input 
                  type="Text" 
                  className="input-register"
                  id="tel"
                  value={tel}
                  placeholder="ex: 0999 999 999"
                  onChange={(e) => setTel(e.target.value)}
              />

              </div>

              <div className="field-input">
                <label className="label-register" htmlFor="bdate"><span>*</span>Birthdate</label>
                <input 
                  type="date" 
                  className="input-register" 
                  id="bdate" 
                  value={birthday}
                  onChange={(e) => setBirth(e.target.value)}
                  
                />
              </div>

            </div>

            <div className="btn">
              <button type="button" className="button-register" id="prev-btn" onClick={handlePrev}>
                <NavigateBeforeIcon />
              </button>

              <button type="button" className="button-register" id="next-btn" onClick={handleNext}>
                <NavigateNextIcon />
              </button>
            </div>

          </div>

          <div className="page">
            <h1>Secure your account</h1>
            <div className="field">
              <div className="field-input">
                <label className="label-register" htmlFor="password"><span>*</span>Password</label>

                <input
                  type={showPassword ? "text" : "password"}
                  className="input-register"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityIcon className="show-hide-pass" /> : <VisibilityOffIcon className="show-hide-pass" />}
                </div>

              </div>

              <div className="field-input">
                <label className="label-register" htmlFor="confirmpass"><span>*</span>Confirm Password</label>
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  id="confirmpass" 
                  className="input-register"
                  placeholder="Confirm Password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <div onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <VisibilityIcon className="show-hide-pass" /> : <VisibilityOffIcon className="show-hide-pass" />}
                </div>

              </div>

            </div>
            <div className="btn">
              <button type="button" className="button-register" id="prev-btn" onClick={handlePrev}>
                <NavigateBeforeIcon />
              </button>
              <button type="button" className="button-register" id="submit-btn" onClick={do_register}>
                Sign up
              </button>
            </div>
          </div>
        </div>
        <p className="have-acc"> You have an account? <Link to={'/login'}>Login here</Link></p>
      </div>
    </section>

  );
}
export default Register;