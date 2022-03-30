import './sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImage" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/9757d496-239b-46c5-baea-6873cbfe9b3d/dd7w3aw-b7940d69-1f4e-4732-a442-ec915af068fc.jpg/v1/fill/w_1192,h_670,q_70,strp/sp___squadron_by_joeyjazz_dd7w3aw-pre.jpg" alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in magna bibendum nisl condimentum egestas. Maecenas quam sapien, blandit quis mattis at, malesuada vel ligula. Quisque non tincidunt ligula. Duis orci metus, vulputate id metus vitae, tempus luctus ante. Aliquam congue sagittis neque, gravida sodales urna</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>

      </div>
    </div>
  )
}

export default Sidebar