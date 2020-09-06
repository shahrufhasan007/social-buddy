import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';


const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts"
        fetch(url)
        .then(response => response.json())
        .then(data => setPosts(data))
    },[])

    const displayStyle ={
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto auto auto auto',
        gridTemplateRows: 'auto auto',
        gridGap: '50px',
        padding: '5px',
        width:'100%',
    };
    return (
        <div style={displayStyle}>
        {
          posts.map(post => <Posts post={post}></Posts>)
        }
        </div>
    );
};

export default AllPosts;