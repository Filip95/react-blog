import React, { useState } from 'react';
import appService from '../services/AppService';

function AddComment ({
    postId,
    commentCallback   
}) {
    const [comment, setComment] = useState({
        text: ''
    })
    const handleComment = async (e) => {
        e.preventDefault();
        await appService.addComment(comment , postId);
        setComment({
            text:''
        })
        commentCallback(comment);
    }

    return (
        <div>
            <form on onSubmit={handleComment}>
            <input required value={comment.text} onChange={({target}) =>setComment({...comment,text:target.value})}></input>
                <button type="submit">Comment on this Post</button>
            </form>
        </div>
    )
}

export default AddComment;