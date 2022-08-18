import React from 'react'

const index = async() => {
    const response = await fetch('http://localhost:3001/posts?_sort=date&_order=DESC',
        {
            method: 'GET',
        });
    const data = await response.json();
    return data
}

const read = (index) => {

}

const uploadCheck = async(nickname, id, password, title, content) => {

    if(nickname === "") {
        alert("닉네임이 없어요")
        return false
    } else if (id === "") {
        alert("아이디가 없어요")
        return false
    } else if (password === "") {
        alert("비밀번호가 없어요")
        return false
    } else if (title === "") {
        alert("제목이 없어요")
        return false
    } else if (content === "") {
        alert("내용이 없어요")
        return false
    }

    const post = {
        nickname: nickname,
        user_id: id,
        password: password,
        title: title,
        content: content,
        date: new Date(),
        like: 0
    }

    const res = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body : JSON.stringify(post)
    })

    console.log(res)

    if(res.status !== 201) {
        alert("에러")
        return false
    }

    alert("작성 완료")
    return true
}

export { index, read, uploadCheck }