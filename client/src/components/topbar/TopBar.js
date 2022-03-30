import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'

const TopBar = () => {

  const user = false

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to='/'>
              HOME
            </Link>

          </li>
          <li className="topListItem">
            <Link className="link" to='/'>
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to='/'>
              CONTACG
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to='/write'>
              WRITE
            </Link>
          </li>
          <li className="topListItem">   <Link className="link" to='/'>
            {user && "LOGOUT"}
          </Link></li>


        </ul>


      </div>
      <div className="topRight">
        {
          user ? (<img className="topImg" src="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg" alt="" />
          ) : (
            <>
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </>
          )
        }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>


    </div>
  )
}

export default TopBar