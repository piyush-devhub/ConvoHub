import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>Piyush Kere <img className='dot' src={assets.green_dot}/></p>
        <img src={assets.help_icon} className='help-icon' alt="" />
      </div>

      <div className="chat-msg">
        <div className="s-msg">
          <p className='msg'>Hi i am Sender, Piyush Kere</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30</p>
          </div>
        </div>
        <div className="s-msg">
          <img className='msg-img' src={assets.pic1} alt="" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30</p>
          </div>
        </div>
        <div className="r-msg">
          <p className='msg'>Hi i am Reciever, Piyush Kere</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30</p>
          </div>
        </div>
      </div>

      



      <div className="chat-input">
        <input type="text" placeholder='Send a message' name="" id="" />
        <input type="file" name="" id="image" accept='image/png, image/jpeg' hidden />
        <label htmlFor="iamge">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  )
}

export default ChatBox