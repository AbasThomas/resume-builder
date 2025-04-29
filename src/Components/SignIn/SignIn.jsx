import React, { useState } from 'react';
import '../SignUp/SignUp.css'; // Reuse the same CSS
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaLinkedinIn, FaEnvelope, FaLock } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-container">
      <form className="form-box">
        <h2>Welcome Back</h2>

        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input type="email" placeholder="Email Address" required />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            required
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        </div>

        <button type="submit">Sign In</button>

        <div className="divider">
          <span>OR continue with</span>
        </div>

        <div className="social-buttons">
          <button type="button" className="google"><FcGoogle size={20} /> Google</button>
          <button type="button" className="facebook"><FaFacebook size={20} /> Facebook</button>
          <button type="button" className="linkedin"><FaLinkedinIn size={20} /> LinkedIn</button>
        </div>

        <p>
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
