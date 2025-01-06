import React, { useState } from "react";
import assets from "../../assets/assets";
import "./Login.css";

const Login = () => {
  const [CurrState, setCurrState] = useState("Sign Up");

  return (
    <>
      <div className="Login min-h-screen flex justify-evenly items-center bg-cover">
        <img src={assets.logo_big} className="w-[20vw]" alt="" />
        <form
          action=""
          className="login-form bg-white flex flex-col justify-between rounded-md h-[65vh] w-[28vw] p-8"
        >
          <h1 className="font-bold text-xl">{CurrState}</h1>
          {CurrState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Username"
              className="form-input border-2 rounded-md p-2"
              required
            />
          ) : null}

          <input
            type="email"
            placeholder="Email Address"
            className="form-input border-2 rounded-md p-2"
            required
          />
          <input
            type="password"
            placeholder="password"
            className="form-input border-2 rounded-md p-2 "
            required
          />
          <button
            type="submit"
            className="submit-button font-semibold text-base rounded-md text-white h-12"
          >
            {CurrState === "Sign Up" ? "Create Account" : "Login"}
          </button>
          <div className="Login-term flex justify-evenly gap-2 ">
            <input type="checkbox" />
            <p>Agree to the terms of use & privacy policy.</p>
          </div>
          <div className="login-forgot flex justify-center items-center">
            {CurrState === "Sign Up" ? (
              <p className="login-toggle">
                Already Have an Account{" "}
                <span
                  onClick={() => setCurrState("Login")}
                  className="text-blue-600 cursor-pointer hover:underline"
                >
                  Click Here
                </span>
              </p>
            ) : (
              <p className="login-toggle">
                Create an Account{" "}
                <span
                  onClick={() => setCurrState("Sign Up")}
                  className="text-blue-600 cursor-pointer hover:underline"
                >
                  Click Here
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
