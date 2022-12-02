import ThreadOptions from './ThreadOptions'
import React, { useState } from 'react'
import axios from "axios"

/* const res = await fetch(
    url, {
        method:'post',
        json:false
    }
) */

var objThreads = {
    postName: "",
    thread: ""
}

const Threads = (props) => {
    var show;
    var cont = 2;
    const [divAlreadyExists, setdivAlreadyExists] = useState(false)

    const getThreads = async () => {
        const res = await axios.get('http://localhost:8080/posts/' + objThreads.thread + '/' + objThreads.postName)
        if (!res.data) {
            sendOption();
        } else {
            setdivAlreadyExists(true)
        }
    }

    const changeThreadHandler = (event) => {
        if (event.target.value == "") {

        } else {
            objThreads.thread = event.target.value
        }
    }
    const changeNameHandler = (e) => {
        if (e.target.value == "") {

        } else {
            objThreads.postName = e.target.value
        }
    }


    const sendOption = () => {
        if (objThreads.postName !== "" && objThreads.thread !== "")
            props.threadChosenHandler(objThreads)
    }

    if (!divAlreadyExists) {
        show = (
            <div className='mt-5 d-flex flex-column align-content-center w-50 '>
                <h2 className='d-flex align-self-center'>Choose your post's thread</h2>
                <select className='w-25 align-self-center m-2' onChange={changeThreadHandler}>
                    <option id="threadOption1"></option>
                    {props.threads.map((thread) => (
                        <ThreadOptions key={thread} thread={thread} />
                    ))}
                </select>
                <h3 className='d-flex align-self-center'>Enter your post's title</h3>
                <input onChange={changeNameHandler} type="text" className='mt-2' id="threadName" />
                <button className='mt-2 btn btn-primary' id="sendThreat" onClick={getThreads}>Send</button>
                <div className='border-bottom mt-2'></div>
            </div>
        )
    } else {
        show = (
            <div className='mt-5 d-flex flex-column align-content-center w-50 '>
                <h2 className='d-flex align-self-center'>Choose your post's thread</h2>
                <select className='w-25 align-self-center m-2' onChange={changeThreadHandler}>
                    <option></option>
                    {props.threads.map((thread) => (
                        <ThreadOptions key={thread} thread={thread} />
                    ))}
                </select>
                <h3 className='d-flex align-self-center'>Enter your post's title</h3>
                <input onChange={changeNameHandler} type="text" className='mt-2' id="threadName" />
                <button className='mt-2 btn btn-primary' id="sendThreat" onClick={getThreads}>Send</button>
                <div className='d-flex align-self-center'><h4 className='mt-2 text-danger'>Ya Existe</h4></div>
                <div className='border-bottom mt-2'></div>
            </div>

        )
    }
    return (show)
}

export default Threads