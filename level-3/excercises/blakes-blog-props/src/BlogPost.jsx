import React from 'react'
import data from "./data"

export default function BlogPost(props) {
    // const article = data.map(item => {
    //     return (
    //         <BlogPost />
    //     )
    // })
    return (
        <div className='bloglist'>
            <h2>{props.title}</h2>
            <br></br>
            {props.subTitle && <h4>{props.subTitle}</h4>}
            <br></br>
            <p>{props.author}</p>
            <p>{props.date}</p>
        </div>
    )
}

console.log()