import React from 'react'
import './topbar.css'

const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>

          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>


        </ul>


      </div>
      <div className="topRight">
        <img className="topImg" src="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg" alt="" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>


    </div>
  )
}

export default TopBar