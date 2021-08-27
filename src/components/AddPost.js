import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import appService from '../services/AppService';



function AddPost() {
  const history = useHistory();
  const { id } = useParams();

  const [newPost, setNewPost] = useState({
    title: "",
    text: "",
  });

  useEffect(() => {
    const fetchPost = async () => {
      const { id: _, ...restData } = await appService.get(id);
      setNewPost({ ...restData });
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await appService.edit(id, newPost);
    } else {
      await appService.add(newPost);
    }

    history.push('/posts');
  };

  const handleReset = () => {
    setNewPost({
      title: "",
      text: "",
    });
  };

 

  const handlePreview = () => {
    alert(`
      Title: ${newPost.title} \n
      Text: ${newPost.text} \n
    `);
  };

 

  return (
    <div>
      <h2>Add new Post</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 200,
          marginLeft: 15,
        }}
      >
        <input
          required
          type='text'
          minLength='2'
          value={newPost.title}
          placeholder='Title'
          onChange={({ target }) =>
            setNewPost({ ...newPost, title: target.value })
          }
        />
        <input
          required
          type='text'
          maxLength='300'
          value={newPost.text}
          placeholder='Content'
          onChange={({ target }) =>
            setNewPost({ ...newPost, text: target.value })
          }
        />
        
        <div>
          <button>{id ? 'Edit' : 'Add new'}</button>
          <button type='button' onClick={handleReset}>
            Reset
          </button>
          <button type='button' onClick={handlePreview}>
            Preview
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;