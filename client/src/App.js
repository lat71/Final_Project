import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from './actions/posts'
import mainimage from './images/mainimage.png'

const App = () => {
    const styles = useStyles();
    const dispatch = useDispatch();

    useEffect(() => 
        {dispatch(getPosts());}, [dispatch]);
    return (
        <Container maxwidth="lg">
            <AppBar className={styles.appBar} position="static" color="inherit">
                <Typography className={styles.heading} variant="h2" align="center">Memories</Typography>
                <img className={styles.image} src={mainimage} alt="mainimage" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow> 
        </Container>
    );
}

export default App;