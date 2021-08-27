import appService from "../services/AppService";
import {Redirect, useParams} from 'react-router-dom'
import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import useFormattedDate from '../hooks/useFormattedDate';

function DetailedPost () {
    const { id } = useParams();

    const [post, setPost] = useState({
        title : '',
        text: ''
    })

    const [comments, setComments] = useState([]);
    const actualDate = useFormattedDate(post.createdAt);
   
    useEffect(() => {
        const fetchPost = async () => {
          const  single_post  = await appService.get(id)
            setPost({...single_post});
            setComments([...single_post.comments]);
          }
        if (id) {
          fetchPost();
          }
      },[id])
  
     
    const setCommentsHandler = (newComment) => {
        setComments([...comments,newComment])
    }

    

    return (
        <div>
            <p> {'Title :  ' + post.title}</p>
            <p> {'Post :  ' + post.text}</p>
            <p>{'Created at:  ' + actualDate}</p>
            <ol>
            <br /> 
                Comments:
            <br /> 
            {comments.map((comment) =>(
                <li key={comment.id}>
                <p>{comment.text}</p>
                </li>
            ))}
            </ol>

      < AddComment
            postId={id}
            commentCallback = {setCommentsHandler}
      />
        </div>
    )
}

export default DetailedPost;