import React, { useContext, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
    const [error, setError] = useState("");
    const { createUserSignIn } = useContext(AuthContext);



    const handleregister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
       
        if (password !== confirm) {
            setError('Your password did not match');
            return;
        }
        else if (password.length < 6) {
            setError('Your password must be at least 6 characters');
            return;
        }
        setError('')
        createUserSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }


  return (
    <div className="form-container p-12">
      <h2 className="form-title text-center">Register</h2>
      <form onSubmit={handleregister}>
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
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            required
          />
        </div>
        <div className="form-control mt-4">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            id="confirm"
            placeholder="confirm password"
            required
          />
        </div>
              <input className="btn-login" type="submit" value="Register"></input>
              <p className="text-red-700 mt-2">{error}</p>
        <p className="mt-6">
          <span className=" text-[#2A414F]">Already have an account?</span>
          <Link to="/login">
            <span className="text-[#FF9900]">Login</span>
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

export default Register;
