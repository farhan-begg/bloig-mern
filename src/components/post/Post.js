import './post.css'

const Post = () => {
  return (
    <div className='post'>
      <img className="postImg"

        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/9757d496-239b-46c5-baea-6873cbfe9b3d/dcvgaj9-9c2ba3a1-6ddf-4422-84fe-c210edc28679.png/v1/fill/w_1131,h_707,q_70,strp/over_the_icy_moon_by_joeyjazz_dcvgaj9-pre.jpg"

        alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />

        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel felis dolor. Proin neque metus, hendrerit id nulla et, feugiat fringilla enim. Aliquam erat volutpat. In id velit cursus, porttitor ex ac, hendrerit massa. Cras sodales nisl ut ultricies semper. Suspendisse nec lorem urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel felis dolor. Proin neque metus, hendrerit id nulla et, feugiat fringilla enim. Aliquam erat volutpat. In id velit cursus, porttitor ex ac, hendrerit massa. Cras sodales nisl ut ultricies semper. Suspendisse nec lorem urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.

      </p>

    </div>
  )
}

export default Post