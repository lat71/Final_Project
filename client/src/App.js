import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from './actions/posts'
import mainimage from './images/mainimage.png'

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const styles = useStyles();
    const dispatch = useDispatch();

    useEffect(() => 
        {dispatch(getPosts());}, [currentId, dispatch]);
    return (
        <Container maxwidth="lg">
            <AppBar className={styles.appBar} position="static" color="inherit">
                <Typography className={styles.heading} variant="h2" align="center">Memories Online</Typography>
                <img className={styles.image} src={mainimage} alt="mainimage" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow> 
        </Container>
    );
}

export default App;