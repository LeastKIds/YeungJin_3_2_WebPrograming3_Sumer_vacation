import React, {useState, useEffect} from 'react'

const Posts = (posts) => {

    useEffect( () => {
        console.log("Posts")
        console.log(posts)
    },[])

    return (
        <div></div>
    )
}

export default Posts;