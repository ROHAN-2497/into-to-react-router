import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    console.log(friend);                                                                                                                                                                                                                                                                                    
const {name, id, email,username} = friend;
    return (
        <div className='container'>
            <h3>{name}</h3>
            <p>UserName : {username}</p>
            <p><small>Email : {email}</small></p>
            <p><Link to={`/friend/${id}`}> Show Me a Detail</Link></p>
        </div>
    );
};

export default Friend;