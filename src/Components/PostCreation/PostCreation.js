import PostCreationCategories from './PostCreationCategories'
import PostCreationImage from './PostCreationImage'
import React, { useState } from 'react'
import axios from "axios"

var objPost = {
    title: "",
    thread: "",
    category: "",
    body: "",
    public: false

}

const PostCreation = (props) => {
    var show;
    const [checkCategory, setCheckCategory] = useState("")


    const bodyAreaHandler = (e) => {
        objPost.body = e.target.value
    }

    const publicHandler = (e) => {
        objPost.public = e.target.value
    }



    const categoryHandler = (e) => {
        objPost.category = e.target.value
        setCheckCategory(e.target.value)
    }


    const checkWords = async () => {
        objPost.title = props.threadChosen.postName;
        objPost.thread = props.threadChosen.thread;

        if (objPost.title !== "", objPost.thread !== "", objPost.category !== "", objPost.body !== "") {

            axios
                .post("http://localhost:8080/posts/add", objPost)

                .then(res => {
                    if (res.data) {
                        console.log("se ha subido" + res)
                    } else {
                        console.log("salio mal" + res)
                    }
                })
                .catch(err => console.log(err));

            props.threadChosenHandler(null)
        } else {
            console.log("faltan datos")
        }



    }






    show = (
        <div className='d-flex flex-column w-50 mt-5'>
            <h2 className='mb-3'>{props.threadChosen.postName}</h2>
            <div className='border-bottom'></div>
            <h2 className='mt-2'> {props.threadChosen.thread}</h2>
            <div className='d-flex flex-column'>
                <h3>Choose a category</h3>
                <select onChange={categoryHandler} className='mt-2'>
                    <option></option>
                    {props.postOptions.map((option) => (
                        <PostCreationCategories key={option} option={option} />
                    ))}
                </select>
                <p className='mt-2'>Want your post to be public?</p>
                <select onChange={publicHandler} className='mt-2'>
                    <option value={false} defaultValue >No</option>
                    <option value={true} >Si</option>
                </select>
                <textarea onChange={bodyAreaHandler} className="mt-2" id="textAreaPost" placeholder='Create your post here' ></textarea>
                <button className='mt-2 btn btn-primary' onClick={checkWords}>Check and Send</button>
                <PostCreationImage category={checkCategory} />
            </div>
        </div >
    )


    return (show)
}

export default PostCreation