import { useContext } from "react";
import { UserContext } from "../context/UserProvider";


function CommentList(props) {

    const { issueId } = props

    const { allComments } = useContext(UserContext)

    const filterComments = allComments.comments.filter(comment => comment.issue === issueId)

    const commentElements = filterComments.map(comment => {
        return (
            <>
                <p>{comment.username} said -</p>
                <p>{comment.comment}</p>
            </>
        )
    })

    console.log(`All Commets: `, allComments)
    console.log(`Filtered Comments:`, filterComments)
    console.log(`Comment Elements: `, commentElements)

    return ( 
        <div key={issueId}>
            {commentElements}
        </div>
     );
}

export default CommentList;