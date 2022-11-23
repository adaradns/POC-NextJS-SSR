import axios from 'axios'
import { BASE_URL } from '~/util/Constants';

export const getAllPosts = async () => {
  const post = await axios.get(`${BASE_URL}/posts`)
  .then(({data}) => {
    return data
  })
  return post
};

export const getPostById = async (id) => {
  const postById = await axios.get(`${BASE_URL}/posts/${id}`)
  .then(({data}) => {
    return data
  })
  return postById
}

export const getComentsPost = async (id) => {
  const postIdComent = await axios.get(`${BASE_URL}/comments?postId=${id}`)
  .then(({data}) => {
    return data
  })
  return postIdComent
} 
const posts = {
  getAllPosts,
  getPostById,
  getComentsPost,
};

module.exports = posts;
