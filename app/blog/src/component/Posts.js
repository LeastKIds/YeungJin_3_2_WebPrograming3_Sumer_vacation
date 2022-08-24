import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

const Posts = (props) => {

    const post = props.post

    return (
        <tr>
            <td >
                <Routes>
                    <Route path="/post" element="post">{post.title}</Route>
                </Routes>
            </td>
            <td >{post.nickname}</td>
            <td >{post.like}</td>
        </tr>
    )
}

export default Posts;