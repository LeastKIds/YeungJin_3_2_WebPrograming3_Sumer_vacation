import React, {useState, useEffect} from 'react'
import Post from './Post'

const Table = (props) => {

    const posts = props.posts

    return (
        <div className="flex justify-center items-center">
            <table className="table-fixed border-separate border-spacing-2 border border-slate-500 bg-slate-100 rounded m-5">
                <thead>
                <tr>
                    <th className="border border-slate-600">제목</th>
                    <th className="border border-slate-600">작성자</th>
                    <th className="border border-slate-600" width={100}>좋아요!</th>
                </tr>
                </thead>
                <tbody>

                {posts && posts.map( (post) => (
                    <Post post={post} key={post.id}/>
                )) }


                </tbody>
            </table>


        </div>



    )
}

export default Table;