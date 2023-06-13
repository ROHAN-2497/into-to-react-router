import React from 'react';
import {  useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <h3>Everything Is Here</h3>
            <h4>Name : {friend.name}</h4>
            <p>{friend.email}</p>
            <p>Phone : {friend.phone}</p>
        </div>
    );
};  

export default FriendDetail;