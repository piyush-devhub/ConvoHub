import React from 'react'
import './ProfileUpdate.css'
import assets from "../../assets/assets";


const ProfileUpdate = () => {
  return (
   <div className="profile">
    <div className="profile-container">
      <form>
        <h3>Profile Details</h3>
        <label htmlfor="avatar">
          <input type='file' id='avatar' accept='.png, .jpeg, .jpg' hidden />
          <img src={assets.avatar_icon} alt="" />
        </label>
        <input type="text" placeholder='Your Name' required />
        <textarea placeholder='Write Profile Bio' required id=""></textarea>
        <button type='submit'>Submit</button>
      </form>
      <img src={assets.logo_icon} alt="" />
    </div>
   </div>
  )
}

export default ProfileUpdate