import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faPencil, faQuestion } from "@fortawesome/free-solid-svg-icons"

const PostCreationImage = (props) => {

    var show;

    if (props.category == "Doubt") {
        show = (
            <div className='mt-2'>
                <FontAwesomeIcon icon={faQuestion} />
            </div>
        )
    } else if (props.category == "Suggestion") {
        show = (
            <div className='mt-2'>
                <FontAwesomeIcon icon={faBullhorn} />
            </div>
        )
    } else if (props.category == "Clarification") {
        show = (
            <div className='mt-2'>
                <FontAwesomeIcon icon={faPencil} />
            </div>
        )
    }
    return (show)
}

export default PostCreationImage