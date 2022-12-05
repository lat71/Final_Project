import React from "react";
import Post from "./Post/Post";
import { useSelector } from 'react-redux';
import useStyles from './styles';

const Posts = () => {
    const styles = useStyles();
    const posts = useSelector((state) => state.posts);

    console.log(posts);
    
    return (
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    );
}


export default Posts;