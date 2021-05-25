import React, { useState } from 'react'
import axios from 'axios'

export default function PostCreate() {
    const [title, setTitle] = useState('')

    const handleSubmit = async (evt) => {
        evt.preventDefault()

        const res = await axios({
            method: 'POST',
            url: 'http://posts.com:32083/posts',
            data: {
                title
            }
        })

        setTitle('')

        console.log(res)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        className="form-control"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
