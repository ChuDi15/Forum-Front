import './App.css';
import Threads from './Components/ThreadSelection/Threads';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import PostCreation from './Components/PostCreation/PostCreation';
import axios from "axios"

const App = () => {

  const [threads, setThreads] = useState([])
  const getThreads = async () => {
    const res = await axios.get('http://localhost:8080/posts/threads')
    setThreads(res.data)
  }

  useEffect(() => {

    getThreads()
  }, [])


  const postOptions = ["Doubt", "Suggestion", "Clarification"]
  var show = ""
  const [threadChosen, setThreadChosen] = useState(null)

  const threadChosenHandler = (objThread) => {
    setThreadChosen(objThread)
  }

  if (threadChosen !== null) {

    show = (
      <div className="App min-vh-100   d-flex justify-content-center">
        <PostCreation threadChosenHandler={threadChosenHandler} postOptions={postOptions} threadChosen={threadChosen} />

      </div>
    )
  } else {
    // key error here
    show = (
      <div className="d-flex justify-content-center min-vh-100 ">

        <Threads threadChosenHandler={threadChosenHandler} threads={threads} />

      </div>
    )
  }

  return (show);
}

export default App;
