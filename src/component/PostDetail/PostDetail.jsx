import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const PostDetail = useLoaderData();
    const {id, title, body} = PostDetail;
    return (
        <div>
            <h5>Detail about your Post : {id}</h5>
            <p>{title}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetail;