import React from 'react'
import BlogCard from '../components/BlogCard'
import ReadLink from '../components/ReadLink'
import postlist from "../posts.json"

const BlogsFromCategory = ({ category, postsFromCategory }) => {
  console.log(postsFromCategory)


  return (
    <div className="blogs-category-wrapper">
      <h3 className='category-title'>
        New From {category}

      </h3>
      <div className="blog-cards-wrapper">
        {postsFromCategory.length > 0 ? postsFromCategory.map((post) => (
          <BlogCard key={post.id} id={post.id} title={post.title} image={post.image} desc={post.description} date={post.date} />
        )) : <p className='no-blogs'> No blogs from this catgory.</p>}


      </div>
      {postsFromCategory.length > 0 && (
        <div className="category-link-wrapper">
          <ReadLink link="/health-and-fintes" text={`See more from ${category}`} />
        </div>)}

    </div>
  )
}

export default BlogsFromCategory