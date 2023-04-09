import React, { useState } from "react";
import "./FormComp.css";
const FormComp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const onChangeNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const onChangePassHandler = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(userName, password);
  };
  return (
    <div>
      <div className="form">
        <div className="upperDiv">
          <h1>ALREADY MEMBERS</h1>
          <h2>Need Help?</h2>
        </div>
        <div className="lowerDiv">
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="username"></label>
            <input
              placeholder="Enter Your Name"
              type="text"
              id="username"
              value={userName}
              onChange={onChangeNameHandler}
            />
            <label htmlFor="password"></label>
            <input
              placeholder="Enter Your Password"
              type="password"
              id="password"
              value={password}
              onChange={onChangePassHandler}
              //   onChange={(e)=>{setPassword(e.target.value)}}
            />
            <button className="btn" type="submit">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
      <h2 id="lowerh2">Do You Have An Account Yet?</h2>
      <h3>Create an Account</h3>
    </div>
  );
};
export default FormComp;
