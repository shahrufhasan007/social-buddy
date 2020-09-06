import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Comment = () => {
    const{commentId} = useParams();
    const [comment, setComment] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${commentId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
        console.log(url);
    },[]);
    return (
        <div>
            {<h1>Comments : {comment.name}</h1>}
        </div>
    );
};

export default Comment;