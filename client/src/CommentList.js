import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CommentList({ comments }) {
    // const [comments, setComments] = useState([])

    // useEffect(() => { getComments() }, [])

    // const getComments = async () => {
    //     const res = await axios({
    //         method: 'GET',
    //         url: `http://localhost:4001/posts/${postId}/comments`
    //     })
    //     console.log(res)

    //     setComments(res.data)
    // }

    const renderedComments = comments.map(comment => {
        return (
            <li key={comment.id}>{
                comment.status === 'approved' ? comment.content :
                    comment.status === 'pending' ? 'Comment is being moderated' :
                        // comment.status === 'rejected' ?
                        'Comment was rejected'
            }</li>
        )
    })

    return (
        <div>
            {renderedComments}
        </div>
    )
}
