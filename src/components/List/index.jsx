// libraries
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
// api
import { deletePost, getPosts } from 'api/posts';
// styles
import './list.css';

const List = () => {
    const [postsList, setPostsList] = useState([]);

    const fetchPosts = useCallback(
        async () => {
            try {
                const data = await getPosts() || [];

                const postsData = data.slice(0, 10);

                setPostsList(postsData);
            } catch (e) {
                console.log(e);
            }
        },
        [],
    );

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const removePost = async id => {
        try {
            await deletePost(id);
            await fetchPosts();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <h1>Posts!</h1>
            <Link to="/create-post">Create Post</Link>
            {postsList.map(post =>
                (
                    <div key={post.id}>
                        <Link
                            className="post-link"
                            to={`/post/${post.id}`}
                        >
                            {post.title}
                        </Link>
                        <button
                            type="button"
                            onClick={() => removePost(post.id)}
                        >
                          Delete
                        </button>
                        <Link
                            to="/edit-post"
                        >
                        Edit Post
                        </Link>
                    </div>
                )
            )}
        </>
    );
};

export default List;
