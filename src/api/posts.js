import { sendRequest } from './index';

export const getPosts = () => {
    return sendRequest('posts');
};

export const getPost = id => {
    return sendRequest(`posts/${id}`);
};

export const deletePost = id => {
    return sendRequest(`posts/${id}`, 'DELETE');
};

export const savePost = data => {
    return sendRequest(`posts`, 'POST', data);
};

