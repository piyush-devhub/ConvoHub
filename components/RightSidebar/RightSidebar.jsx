import React from "react";
import "./RightSidebar.css";
import assets from "../../assets/assets";

const RightSidebar = () => {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>
          Piyush Kere <img className="dot" src={assets.green_dot} alt="" />
        </h3>
        <p>Hey, i am First user of ConvoHub</p>
      </div>
      <hr />
      <div className="media">
        <p>Media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic2} alt="" />
        </div>
      </div>
      <div className="logout">
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default RightSidebar;
