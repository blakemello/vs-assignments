import React from 'react'
import data from "./data"

export default function BlogPost(props) {
    // const article = data.map(item => {
    //     return (
    //         <BlogPost />
    //     )
    // })
    return(
        <div>
           <span>{props.title}</span> 
           <br></br>
           <span>{props.subTitle}</span>
           <br></br>
           <span>{props.author}</span>
           <span>{props.date}</span>
        </div>
    )
}