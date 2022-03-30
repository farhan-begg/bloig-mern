import './write.css'

const Write = () => {
  return (
    <div className="write">
      <img className="writeImg" src="https://c4.wallpaperflare.com/wallpaper/224/829/129/digital-digital-art-artwork-illustration-simple-hd-wallpaper-preview.jpg" alt="" />
      <form className="writeForm">

        <div className="writeFormGroup">
          <label htmlFor='fileInput'>
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }} />
          <input type="text" placeholder='Title' className="writeInput" autoFocus={true} />
        </div>

        <div className="writeFormGroup">
          <textarea placeholder="Tell your story..." type="text" className="writeInput writeText">

          </textarea>
        </div>
        <button className="writeSubmit">Publish</button>

      </form>
    </div>
  )
}

export default Write