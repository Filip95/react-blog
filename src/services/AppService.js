import axios from 'axios';

class AppService {
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:8000/api',
    });
  }

  async getAll() {
    try {
      const { data } = await this.client.get('posts');

      return data;
    } catch (error) {
      console.log(error);
    }

    return [];
  }
  

  async get(id) {
    try {
      const { data } = await this.client.get(`posts/${id}?filter={"include":
      ["comments"]}`);
      return data;
    } catch (error) {
      console.log(error);
    }

    return {};
  }

  async edit(id, newPost) {
    try {
      const { data } = await this.client.put(`posts/${id}`, newPost);

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }


  async add(newPost) {
    try {
      const { data } = await this.client.post('posts', newPost);

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  async delete(PostId) {
    try {
      const { data } = await this.client.delete(`posts/${PostId}`);

      return data;
    } catch (error) {
      console.log(error);
    }

    return {};
  }

  addComment(comment , id ) {
    try {
    const data = this.client.post(`posts/${id}/comments`, comment);
    return data;
    }catch (error) {
      console.log(error);
    }
}

 
}

export default new AppService();