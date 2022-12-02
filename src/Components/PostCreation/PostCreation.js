import PostCreationCategories from './PostCreationCategories'
import PostCreationImage from './PostCreationImage'
import React, { useState } from 'react'
import axios from "axios"


const PostCreation = (props) => {
    var show;
    const [checkPost, setCheckPost] = useState(false)
    const [checkCategory, setCheckCategory] = useState("")
    var objPost = {
        title: props.threadChosen.postName,
        thread: props.threadChosen.thread,
        category: "",
        text: ""
    }

    const textAreaHandler = (e) => {
        objPost.text = e.target.value
        console.log(objPost.text)
    }
    console.log(checkCategory)
    const categoryHandler = (e) => {
        setCheckCategory(e.target.value)
    }

    const getPost = async () => {
        const res = await axios.get('http://localhost:8080/posts/')
        console.log(res)

        if (!res.data) {
            setCheckPost(true)
        } else {

        }
    }

    const sendPost = async () => {
        const res = await axios.get('http://localhost:8080/posts/')
        console.log(res)

        if (!res.data) {

        } else {

        }
    }



    if (!checkPost) {
        show = (
            <div className='d-flex flex-column w-50 '>
                <h2>Post title: {props.threadChosen.postName}</h2> - <h2> {props.threadChosen.thread}</h2>
                <div className='d-flex flex-column'>
                    <select onChange={categoryHandler} className='m-2'>
                        <option></option>
                        {props.postOptions.map((option) => (
                            <PostCreationCategories key={option} option={option} />
                        ))}
                    </select>
                    <textarea onChange={textAreaHandler} id="textAreaPost" placeholder='Create your post here' ></textarea>
                    <input type="text" />
                    <button onClick={getPost}>Check</button>
                    <PostCreationImage category={checkCategory} />
                </div>
            </div>
        )

    } else {
        show = (
            <div className='d-flex flex-column w-50 '>
                <h2>Post title: {props.threadChosen.postName}</h2> - <h2> {props.threadChosen.thread}</h2>
                <div className='d-flex flex-column'>
                    <select onChange={categoryHandler} className='m-2'>
                        <option></option>
                        {props.postOptions.map((option) => (
                            <PostCreationCategories key={option} option={option} />
                        ))}
                    </select>
                    <textarea onChange={textAreaHandler} id="textAreaPost" placeholder='Create your post here' ></textarea>
                    <input type="text" />
                    <button onClick={getPost}>Check</button>
                    <PostCreationImage />
                    <button onClick={sendPost}>Send</button>
                </div>
            </div>
        )
    }
    return (show)
}

export default PostCreation