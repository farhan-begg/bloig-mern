import Sidebar from '../sidebar/Sidebar'
import './singlepost.css'

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://c4.wallpaperflare.com/wallpaper/30/586/460/artwork-fantasy-art-digital-art-forest-wallpaper-preview.jpg" alt="" />
        <h1 className="singlePostTitle"> Lorem Ipsum dolor sit amet
          <div className='singlePostEdit'>
            <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Farhan</b></span>
          <span className="singlePostData">1 hour ago</span>
        </div>
        <p className='singlePostDesc '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel felis dolor. Proin neque metus, hendrerit id nulla et, feugiat fringilla enim. Aliquam erat volutpat. In id velit cursus, porttitor ex ac, hendrerit massa. Cras sodales nisl ut ultricies semper. Suspendisse nec lorem urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus at semper tellus, et viverra sapien. Cras nec porttitor magna. Praesent vel nulla turpis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel felis dolor. Proin neque metus, hendrerit id nulla et, feugiat fringilla enim. Aliquam erat volutpat. In id velit cursus, porttitor ex ac, hendrerit massa. Cras sodales nisl ut ultricies semper. Suspendisse nec lorem urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus at semper tellus, et viverra sapien. Cras nec porttitor magna. Praesent vel nulla turpis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel felis dolor. Proin neque metus, hendrerit id nulla et, feugiat fringilla enim. Aliquam erat volutpat. In id velit cursus, porttitor ex ac, hendrerit massa. Cras sodales nisl ut ultricies semper. Suspendisse nec lorem urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus at semper tellus, et viverra sapien. Cras nec porttitor magna. Praesent vel nulla turpis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel felis dolor. Proin neque metus, hendrerit id nulla et, feugiat fringilla enim. Aliquam erat volutpat. In id velit cursus, porttitor ex ac, hendrerit massa. Cras sodales nisl ut ultricies semper. Suspendisse nec lorem urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus at semper tellus, et viverra sapien. Cras nec porttitor magna. Praesent vel nulla turpis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel felis dolor. Proin neque metus, hendrerit id nulla et, feugiat fringilla enim. Aliquam erat volutpat. In id velit cursus, porttitor ex ac, hendrerit massa. Cras sodales nisl ut ultricies semper. Suspendisse nec lorem urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus at semper tellus, et viverra sapien. Cras nec porttitor magna. Praesent vel nulla turpis.

        </p>



      </div>



    </div>
  )
}

export default SinglePost