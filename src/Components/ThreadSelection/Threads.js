import ThreadOptions from './ThreadOptions'
import React, { useState } from 'react'
import axios from "axios"

/* const res = await fetch(
    url, {
        method:'post',
        json:false
    }
) */


const Threads = (props) => {
    var selectValue = {
        postName: "",
        thread: ""
    }
    var show;

    const [divExists, setDivExists] = useState(false)

    const getFlights = async () => {
        const res = await axios.get('http://localhost:8080/posts/' + selectValue.thread + '/' + selectValue.postName)
        console.log(res)
        console.log(selectValue)
        if (!res.data) {
            sendOption();
        } else {
            setDivExists(true)
        }
    }

    const changeThreadHandler = (event) => {
        selectValue.thread = event.target.value
    }
    const changeNameHandler = (e) => {
        selectValue.postName = e.target.value
    }


    const sendOption = () => {
        if (selectValue.postName !== "" && selectValue.thread !== "")
            props.threadChosenHandler(selectValue)

    }

    if (!divExists) {
        show = (
            <div>
                <select onChange={changeThreadHandler}>
                    <option></option>
                    {props.threads.map((thread) => (
                        <ThreadOptions key={thread} thread={thread} />
                    ))}
                </select>
                <input onChange={changeNameHandler} type="text" id="threadName" />
                <button onClick={getFlights}>Send</button>
            </div>
        )
    } else {
        show = (
            <div>
                <select onChange={changeThreadHandler}>
                    <option></option>
                    {props.threads.map((thread) => (
                        <ThreadOptions key={thread} thread={thread} />
                    ))}
                </select>
                <input onChange={changeNameHandler} type="text" id="threadName" />
                <button onClick={getFlights}>Send</button>
                <div>Ya existe</div>
            </div>
        )
    }
    return (show)
}

export default Threads