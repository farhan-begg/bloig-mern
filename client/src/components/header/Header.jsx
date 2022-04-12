import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://www.myfreewalls.com/public/uploads/preview/4k-cyberpunk-neon-city-game-wallpaper-11631300087d5okgsbd05.jpg"
        alt=""
      />
    </div>
  );
}
