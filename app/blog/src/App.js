// import logo from './logo.svg';
import './App.css';
import Table from './component/Table'
import Title from './component/Title'
import Footer from './component/Footer'
import Input from './component/Input'
import {useEffect, useState, useCallback} from "react";
import {index} from "./Controller/PostController";
import post from "./component/Post";


function App() {

    const [posts, setPosts] = useState()



    const postsIndex = async() => {
        const res = await index()
        setPosts(res)
    }

    useEffect(  () => {
        postsIndex()

    }, [])

    const reloadPosts = useCallback( () => {
        postsIndex()
    })


  return (
    <div className="App h-screen dark:bg-gray-800 overflow-auto">
        <Title/>
        <Table posts={posts}/>
        <Input reloadPosts={reloadPosts}/>
        <Footer/>
    </div>
  );
}

export default App;
