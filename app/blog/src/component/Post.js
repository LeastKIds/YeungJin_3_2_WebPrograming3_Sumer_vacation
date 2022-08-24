import React, {useState, useEffect} from 'react'

const Post = (props) => {

    const post = props.post

    return (
        <tr>
            <td >{post.title}</td>
            <td >{post.nickname}</td>
            <td >{post.like}</td>
        </tr>
    )
}

export default Post;