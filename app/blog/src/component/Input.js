import React, { useState, useEffect } from 'react'

import { uploadCheck } from '../Controller/PostController'

const Input = () => {

    const [nickname, setNickname] = useState("")
    const [id, setId] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    return (
        <div className='flex items-center justify-center mt-10'>
            <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
                <div className="flex w-full items-center justify-between border-b pb-3">
                    <div className="space-x-3">

                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-3"
                               htmlFor="grid-first-name">
                            닉네임
                        </label>
                        {/*<p className="block" >dd</p>*/}

                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name" type="text" placeholder="닉네임" value={nickname}
                            onChange= { (event) => { setNickname(event.target.value) } } />



                    </div>
                    <div className="flex items-center space-x-8">


                        <div>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-3"
                                   htmlFor="grid-first-name">
                                아이디
                            </label>
                            {/*<p className="block" >dd</p>*/}

                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name" type="text" placeholder="아이디" value={id}
                                onChange={ (event) => { setId(event.target.value) }}
                            />
                        </div>

                        <div>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-3"
                                   htmlFor="grid-first-name">
                                비밀번호
                            </label>
                            {/*<p className="block" >dd</p>*/}

                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name" type="password" placeholder="비밀번호" value={password}
                                onChange={ (event) => { setPassword(event.target.value) } }
                            />
                        </div>

                    </div>
                </div>

                <div className="mt-4 mb-6">
                    <div className="relative z-0 mb-6 group">
                        <input type="text" name="floating_title" id="floating_title"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required value={title}
                                onChange={ (event) => { setTitle(event.target.value) }}
                        />
                        <label htmlFor="floating_title"
                               className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">제목</label>
                    </div>

                    <label htmlFor="message"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">내용</label>

                    <textarea id="message" rows="4"
                              className="block p-2.5 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="내용을 입력해 주세요" value={content}
                                onChange={ (event) => { setContent(event.target.value)}}
                    ></textarea>
                </div>
                <button type="button"
                        onClick={async() => {

                            if( await uploadCheck(nickname, id, password, title, content) ) {
                                await setNickname("")
                                setId("")
                                setTitle("")
                                setContent("")
                                setPassword("")
                            }
                        }}
                        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    등록
                </button>

            </div>


        </div>
    )
}

export default Input;