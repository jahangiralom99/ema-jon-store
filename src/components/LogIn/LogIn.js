import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const LogIn = () => {
  const [show, setShow] = useState(false);

  const { logInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-container p-12">
      <h2 className="form-title text-center">login</h2>
      <form onSubmit={handleLogIn}>
        <div className="form-control mt-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-control mt-4">
          <label htmlFor="password">Password</label>
          <input
            type={show ?"text" : "password"}
            name="password"
            id="password"
            placeholder="Your password"
            required
          />
          <p onClick={()=>setShow(!show)}><small>
            {
              show ? <span>Hide Password</span> : <span>Show Password</span>
                }
          </small></p>
        </div>
        <input className="btn-login" type="submit" value="Login"></input>
        <p className="mt-6">
          <span className=" text-[#2A414F]">New to Ema-jon? </span>
          <Link to="/register">
            <span className="text-[#FF9900;]">Create New Account</span>
          </Link>
        </p>
        <div className="flex gap-6 items-center mt-12">
          <hr className="w-[145px] border border-text-[#95A0A7]" /> <p>Or</p>{" "}
          <hr className="w-[145px] border border-text-[#95A0A7]" />
        </div>
        <button className="mt-6 border w-[415px] text-[#2A414F] p-5 rounded-lg flex items-center justify-center">
          <img
            className="w-[45px]"
            src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=893&height=600&name=image8-2.jpg"
            alt=""
          />
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default LogIn;
