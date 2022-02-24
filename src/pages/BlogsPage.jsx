import { Icon } from '@iconify/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import postlist from "../posts.json"


const BlogsPage = () => {
    const { page } = useParams()
    const [searchState, setSearchState] = useState("")

    let blogsFromCategory = postlist.filter((post) => post.tags.includes(page))
    const titlewords = page.split("-")
    let title = ""
    titlewords.map((word) => {
        if (word === "and") {
            title += "& "
        } else {
            title += word + " "
        }
    });
    useEffect(() => {
        console.log(searchState)
    }, [searchState])


    return (
        <div className="all-blogs-page-wrapper">
            <div className="all-blogs-hero">
                <img src={require("../assets/images/allBlogHeroBg.png")} alt="" className='hero-image' />
                <div className="title-wrapper">
                    <h1 className='page-title'>{title}</h1>
                    <img src={require("../assets/images/titleStroke.svg")} alt="" />
                </div>
            </div>
            <div className="container">
                <div className="search-bar-wrapper">
                    <label htmlFor="search">
                        <Icon icon="bytesize:search" color="#7b726b" className='search-icon' width={28} />
                    </label>
                    <img src={require("../assets/images/searchBar.svg")} alt="" />
                    <input type="text" id='search' value={searchState} onChange={(e) => setSearchState(e.target.value)} />

                </div>
                <div className="blog-cards-wrapper">
                    {blogsFromCategory.length > 0 ? blogsFromCategory.map((post) => (

                        <Link key={post.id} to={`/${page}/${post.id}`} className="card-link">
                            <BlogCard id={post.id} title={post.title} image={post.image} desc={post.description} date={post.date} category={page} />
                        </Link>
                    )) : <p className='no-blogs'> No blogs from this category.</p>}

                </div>

            </div>
        </div>
    )
}

export default BlogsPage