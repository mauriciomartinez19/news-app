import { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import './comments.css'

const Comments = ({ isAunthenticated, id }) => {

    const [post, setPost] = useState('')
    const [reply, setReply] = useState(false)
    const [commentId, setCommentId] = useState('')

    const [comments, setComments] = useState([])
    const [replys, setReplys] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')

        let decoded = jwt_decode(token)
        const name = decoded.name

        const mes = {
            post: post,
            userName: name,
            newsId: id,
            reply: reply,
            commentId: commentId,
            likes: 0,
            date: new Date().toDateString()
        }

        console.log(mes)

        const response = await fetch('http://localhost:5000/api/comments/create-comment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mes)
        })
        const data = await response.json()
        console.log(data)
        setPost('')
    }

    const getComments = async () => {
        const response = await fetch('http://localhost:5000/api/comments/' + id)
        const data = await response.json()
        const comentarios = data.filter(comment => comment.reply === false)
        const respuestas = data.filter(comment => comment.reply === true)
        setComments(comentarios)
        setReplys(respuestas)
    }

    useEffect(() => {
        getComments()
    }, [])

    return <>
        <div className='comments-box'>
            <div className='comments-padding-element'>
                <h2 className='comments-title'>Add your comment</h2>

                {!comments.length && <h2>Be the first who comment!!</h2>}

                {!!comments.length &&
                    comments.map((comment) => {
                        const { _id, post, userName, likes, date } = comment
                        return <>
                            <div key={_id} className='unit-comment-box'>
                                <div className='unit-comment-top-box'>
                                    <label className='unit-comments-name'>{userName}</label>
                                    <label className='unit-comments-date'>{date}</label>
                                </div>
                                <p className='comments-content'>{post}</p>
                                <div className='unit-comment-buttons-box'>
                                    <label className='likes-number'>{likes}</label>
                                    <button className='unit-comment-button' >Like</button>
                                    <button className='unit-comment-button' onClick={() => setReply(!reply)}>Reply</button>
                                </div>

                                {reply && replys?.filter(reply => reply.commentId === _id).map(reply => {
                                    const { post, userName, likes, date } = reply
                                    return <div className='comments-reply-box'>
                                        <div className='unit-comment-top-box'>
                                            <label className='unit-comments-name'>{userName}</label>
                                            <label className='unit-comments-date'>{date}</label>
                                        </div>
                                        <p className='comments-content'>{post}</p>
                                        <div className='unit-comment-buttons-box'>
                                            <label className='likes-number'>{likes}</label>
                                            <button className='unit-comment-button' >Like</button>
                                        </div>
                                        {reply && isAunthenticated &&
                                            <form className='comment-input-form' onSubmit={handleSubmit}>
                                                <label>Add new comment</label>
                                                <textarea className='comment-input' placeholder='insert your comment' defaultValue='' onChange={(e) => setPost(e.target.value)} />
                                                <button className='comment-submit-btn'
                                                    onClick={() => {
                                                        setReply(true)
                                                        setCommentId(_id)
                                                    }}>Submit</button>
                                            </form>
                                        }
                                    </div>
                                })}
                            </div>
                        </>
                    })
                }

                {isAunthenticated &&
                    <form className='comment-input-form' onSubmit={handleSubmit}>
                        <label>Add new comment</label>
                        <textarea className='comment-input' placeholder='insert your comment' value={post} onChange={(e) => setPost(e.target.value)} />
                        <button className='comment-submit-btn' onClick={() => setReply(false)}>Submit</button>
                    </form>
                }
                {!isAunthenticated &&
                    <>
                        <label>Please login to comment</label>
                        <a href='/login'>
                            <button className='comment-submit-btn'>LogIn</button>
                        </a>
                    </>
                }
            </div>
        </div>

    </>
}

export default Comments