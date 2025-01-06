import React from 'react'
import './LeftSidebar.css'
import assets from '../../assets/assets'

const LeftSidebar = () => {
  return (
    <div className='LS'>
      <div className="LS-top">
        <div className="LS-nav">
          <img src={assets.logo} alt="" />
          <div className="menu">
            <img className='menubtn' src={assets.menu_icon} alt="" />
            <div className="sub-menu">
              <p>Edit Profile</p>
              <hr />
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="LS-search">
          <img src={assets.search_icon} alt="" />
          <input type="text " placeholder='Search Here...' />
        </div>
      </div>
      <div className="LS-list">
        {Array(12).fill("").map(()=>(
          <div className="friends">
          <img src={assets.profile_img} alt="" />
          <div>
            <h1>Piyush Kere</h1>
            <p>Hey! How are you?</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default LeftSidebar