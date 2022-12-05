import React from "react";
import Post from "./Post/Post";
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const styles = useStyles();
    const posts = useSelector((state) => state.posts);
    
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={styles.container} container aligitems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post.id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}


export default Posts;