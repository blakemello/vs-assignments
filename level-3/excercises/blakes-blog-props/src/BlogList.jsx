import React from 'react'
import BlogPost from './BlogPost'

export default function BlogList() {
    return(
        <div>
            <div>
           <h1>BlogList Text</h1> 
           </div>
           <div>
                <BlogPost 
                    title='Man must explore, and this is exploration at its greatest'
                    subTitle='Problems look mighty small from 150 miles up'
                    author='Start Bootstrap'
                    date='September 24, 2019'
                />
           </div>
        </div>
    )
}