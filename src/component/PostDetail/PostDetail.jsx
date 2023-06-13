import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const PostDetail = useLoaderData();
    const {id, title, body} = PostDetail;
    const navigate = useNavigate()
    const backHandle = ()=>{
     navigate(-1)
    }
    return (
        <div>
            <h5>Detail about your Post : {id}</h5>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={backHandle}>Go Back</button>
        </div>
    );
};

export default PostDetail;