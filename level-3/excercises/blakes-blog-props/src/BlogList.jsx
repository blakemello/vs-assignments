import React from 'react'
import BlogPost from './BlogPost'
import data from './data'

export default function BlogList() {
    const Article = data.map(item => {
        return (
            <BlogPost 
            key={item.id}
            {...item}
            />
        )
    })
    return(
        <div className='list--css'>
            {Article}
        </div>
    )
}
{/* <div>
<h1>BlogList Text</h1> 
</div>
<div>
    <BlogPost />
</div> */}