import React from 'react'
import { useParams } from 'react-router-dom'

const BlogsPage = () => {
    const { page } = useParams()
    const titlewords = page.split("-")
    let title = ""
    titlewords.map((word) => {
        if (word === "and") {
            title += "& "
        } else {
            title += word + " "
        }
    });
    console.log(title)
    return (
        <div className="title-wrapper">
            <h1 className='page-title'>{title}</h1>
            <img src={require("../assets/images/titleStroke.svg")} alt="" />
        </div>
    )
}

export default BlogsPage