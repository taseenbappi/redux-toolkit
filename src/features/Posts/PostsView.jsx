import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postsSlice';
import "./PostsView.css";

const PostsView = () => {

    const { posts, isLoading, error } = useSelector((state) => (state.posts));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    return (
        <div style={{ textAlign: "center" }}>
            <h1>All Posts</h1>
            {isLoading && <p>Post is loading...</p>}
            {error && <p>{error}</p>}
            <div className="post-container">
                {posts && posts.map((post, index) => {
                    return <article key={post.id} >
                        <span>Post Details:</span>
                        <p>{post.body}</p>
                    </article>
                })}
            </div>

        </div>
    );
};

export default PostsView;