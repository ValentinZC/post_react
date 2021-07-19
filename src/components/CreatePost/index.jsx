// libraries
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
// api
import { savePost } from 'api/posts';
// styles
import './form.css';

const CreatePost = () => {
    const history = useHistory();

    const createPost = async event => {
        event.preventDefault();

        try {
            const data = await savePost({
                title: event.target.title.value,
                body: event.target.body.value,
            });

            history.push('/');
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <form onSubmit={createPost}>
                <input type="text" name="title" placeholder="Title" />
                <textarea rows="10" cols="22" placeholder="Body" name="body"></textarea>
                <button type="submit">Create</button>
            </form>
        </>
    );
};

export default CreatePost;
