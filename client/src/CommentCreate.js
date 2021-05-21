import axios from 'axios'
import React, { useState } from 'react'

export default function CommentCreate({ postId }) {
    const [content, setContent] = useState('')

    const handleSubmit = async (evt) => {
        evt.preventDefault()

        const res = await axios({
            method: 'POST',
            url: `http://localhost:4001/posts/${postId}/comments`,
            data: {
                content
            }
        })
        console.log(res)

        setContent('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>New Comment</label>
                    <input
                        className="form-control"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
