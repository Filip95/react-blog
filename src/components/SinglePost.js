import React,{ useEffect, useState} from 'react';
import appService from '../services/AppService';
import {Redirect, useParams} from 'react-router-dom'
import AddComment from './AddComment';
function SinglePost({
  id,
  title,
  text,
  deleteCallback,
  editCallback,
  viewCallback
}) {

  const [post, setPost] = useState({
        title : '',
        text: ''
    })

  
  return (
    <li
      style={{
        border: '1px solid black',
        marginBottom: '5px',
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h3>title: {title}</h3>
      <h3>text: {text}</h3>
      <button onClick={() => deleteCallback(id)}>Delete</button>
      <button onClick={() => editCallback(id)}>Edit</button>
      {/* <Link to= '/posts/:id'>View Post</Link> */}
      <button onClick={() => viewCallback(id)}>View Post</button>

      
    </li>
  );
}

export default SinglePost;