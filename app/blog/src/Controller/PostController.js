import React from 'react'

const read = (index) => {

}

const uploadCheck = async(nickname, id, password, title, content) => {
    console.log(nickname)
    console.log(id)
    console.log(password)
    console.log(title)
    console.log(content)

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
        id: id,
        password: password,
        title: title,
        content: content
    }

    const res = await fetch('http://localhost/post', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body : JSON.stringify(post)
    })

    console.log(res)

    // const response = await fetch('http://localhost/posts',
    //     {
    //         method: 'GET',
    //     });
    //
    // const data = await response.json();
    // console.log("get")
    // console.log(data)



    alert("작성 완료")
    return true
}

export { read, uploadCheck }