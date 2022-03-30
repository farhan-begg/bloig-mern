import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/9757d496-239b-46c5-baea-6873cbfe9b3d/df11eqg-d9be491f-a78e-48c8-9899-c03e217c6c14.jpg/v1/fill/w_1192,h_670,q_70,strp/behind_the_blister_by_joeyjazz_df11eqg-pre.jpg" alt="" />
    </div>
  )
}

export default Header