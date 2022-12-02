import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faPencil, faQuestion } from "@fortawesome/free-solid-svg-icons"

const PostCreationImage = (props) => {

    var show;

    if (props.category == "Doubt") {
        show = (
            <div>
                <FontAwesomeIcon icon={faQuestion} />
            </div>
        )
    } else if (props.category == "Suggestion") {
        <FontAwesomeIcon icon={faBullhorn} />
    } else {
        <FontAwesomeIcon icon={faPencil} />
    }
    return (show)
}

export default PostCreationImage