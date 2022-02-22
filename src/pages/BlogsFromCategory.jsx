import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import ReadLink from '../components/ReadLink'
import postlist from "../posts.json"

const BlogsFromCategory = ({ category, postsFromCategory, linkCategory }) => {
  // console.log(postsFromCategory)
  // console.log(category)


  return (
    <div className="blogs-category-wrapper">
      <h3 className='category-title'>
        New From {category}

      </h3>
      <div className="blog-cards-wrapper">
        {postsFromCategory.length > 0 ? postsFromCategory.map((post) => (
          <Link key={post.id} to={`/${linkCategory}/${post.id}`} className="card-link">
            <BlogCard id={post.id} title={post.title} image={post.image} desc={post.description} date={post.date} category={linkCategory} />
          </Link>
        )) : <p className='no-blogs'> No blogs from this catgory.</p>}


      </div>
      {postsFromCategory.length > 0 && (
        <div className="category-link-wrapper">
          <ReadLink link={`/${linkCategory}`} text={`See more from ${category}`} />
        </div>)}

    </div>
  )
}

export default BlogsFromCategory