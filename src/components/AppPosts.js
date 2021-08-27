
import SinglePost from './SinglePost';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import appService from '../services/AppService';
//import {Link} from 'react-router-dom';




function AppPosts(){
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await appService.getAll();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const handleDelete = async (PostId) => {
    const response = prompt(
      "Are you sure you want to delete this Post ?\n Enter 'Y' if you are"
    );

    if (response !== 'Y') {
      return;
    }

    const data = await appService.delete(PostId);

    if (data.count > 0) {
      setPosts(posts.filter(({ id }) => id !== PostId));
    }
  };

  const handleEdit = (id) => {
    history.push(`edit/${id}`);
  };
  
  const handleView = (id) => {
    history.push(`post/${id}`);
  }

  
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <SinglePost
            key={post.id}
            id={post.id}
            title={post.title}
            text={post.text}
            deleteCallback={handleDelete}
            editCallback={handleEdit}
            viewCallback={handleView}
          />
        ))}
      </ul>
    </div>
  );
}


export default AppPosts;