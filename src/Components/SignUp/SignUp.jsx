import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaLinkedinIn, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="form-container">
      <form className="form-box">
        <h2>Create Account</h2>

        <div className="input-group">
          <FaUser className="input-icon" />
          <input type="text" placeholder="Full Name" required />
        </div>

        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input type="email" placeholder="Email Address" required />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input type={showPassword ? 'text' : 'password'} placeholder="Password" required />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input type={showConfirm ? 'text' : 'password'} placeholder="Confirm Password" required />
          <span className="eye-icon" onClick={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        </div>

        <label className="checkbox">
          <input type="checkbox" required />
          I agree to the <a href="#">Privacy Policy</a> & <a href="#">Terms</a>
        </label>

        <button type="submit">Sign Up</button>

        <div className="divider">
          <span>OR continue with</span>
        </div>

        <div className="social-buttons">
          <button type="button" className="google"><FcGoogle size={20} /> Google</button>
          <button type="button" className="facebook"><FaFacebook size={20} /> Facebook</button>
          <button type="button" className="linkedin"><FaLinkedinIn size={20} /> LinkedIn</button>
        </div>

        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
