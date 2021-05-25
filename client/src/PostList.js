import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

export default function PostList() {
    const [posts, setPosts] = useState({})

    useEffect(() => { getPosts() }, [])

    const getPosts = async () => {
        const res = await axios({
            method: 'GET',
            url: 'http://posts.com:32083/posts'
        })
        console.log(res.data)
        setPosts(res.data)
    }

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div
                className="card"
                style={{ width: '30%', marginBottom: '20px' }}
                key={post.id}
            >
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentCreate postId={post.id} />
                    <CommentList comments={post.comments} />
                </div>
            </div>
        )
    })

    return (
        <div className="d-flex flex-row justify-content-between">
            {renderedPosts}
        </div>
    )
}
