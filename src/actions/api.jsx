import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev.codeleap.co.uk/careers/'
});

export async function getPostsData(url = "/") {
  try {
    const result = await api.get(url);
    return result.data;    
  } catch (error) {
    console.log(error);
  }
}

export async function createPost(username, title, content) {
  const url = "/";
  const data = { username, title, content };

  try {
    return await api.post(url, data);
  } catch (error) {
    console.log(error);
  }
}

export async function updatePost(id, title, content) {
  const url = `${id}/`;
  const data = { title, content };

  try {
    return await api.patch(url, data);
  } catch (error) {
    console.log(error);
  }
}

export async function deletePost(id) {
  const url = `/${id}/`;
  const data = {};

  try {
    return await api.delete(url, data);
  } catch (error) {
    console.log(error);
  }
}
