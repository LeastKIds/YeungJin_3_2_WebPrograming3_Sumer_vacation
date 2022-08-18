import React, {useState, useEffect} from 'react'
import Posts from './Posts'

import { index } from '../Controller/PostController'


const Table = () => {

    const [posts, setPosts] = useState([])


    const postsIndex = async() => {
        return await index()
    }

    useEffect(  () => {
        postsIndex().then(r => setPosts(r))
    }, [])

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
                {/*<tr>*/}
                {/*    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>*/}
                {/*    <td>Malcolm Lockyer</td>*/}
                {/*    <td>1961</td>*/}
                {/*</tr>*/}
                <Posts posts={posts} />

                </tbody>
            </table>
        </div>

    )
}

export default Table;