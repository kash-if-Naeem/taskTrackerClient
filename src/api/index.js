import axios from 'axios';

const url = 'http://localhost:5000/api/v1/transactions';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const counterPost = (id) => axios.patch(`${url}/${id}/counterPost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);