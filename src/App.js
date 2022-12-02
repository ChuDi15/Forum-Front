import './App.css';
import Threads from './Components/ThreadSelection/Threads';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import PostCreation from './Components/PostCreation/PostCreation';

const App = () => {
  const images = ["Question", "Suggestion", "Clarification"]
  const threads = ["cars", "thread2", "thread3"]
  const postOptions = ["Question", "Suggestion", "Clarification"]
  var show = ""
  const [threadChosen, setThreadChosen] = useState(null)

  const threadChosenHandler = (objThread) => {
    console.log(objThread)


    setThreadChosen(objThread)


  }
  console.log(threadChosen)
  if (threadChosen !== null) {

    show = (
      <div className="App min-vh-100 bg-secondary text-white d-flex justify-content-center">
        <PostCreation images={images} postOptions={postOptions} threadChosen={threadChosen} />

      </div>
    )
  } else {
    // key error here
    show = (
      <div className="App min-vh-100 bg-secondary text-white">

        <Threads threadChosenHandler={threadChosenHandler} threads={threads} />

      </div>
    )
  }

  return (show);
}

export default App;
