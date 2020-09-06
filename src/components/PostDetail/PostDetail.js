import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 345,
    },
  });

const POstDetail = () => {
    const classes = useStyles();
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])
    return (
        <div>
            <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://i.postimg.cc/SR9ZTfkx/download.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                                <h3>User ID : {post.id}</h3>
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                                <h4>Post Title : {post.title}</h4>
                        </Typography>
                            <Typography variant="body1" color="textPrimary" component="p">
                               <p>Post Body : {post.body}</p>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="contained" color="secondary">
                            {/* <Link to={`/posts/${id}`}>See More</Link> */}
                        </Button>
                    </CardActions>
                </Card>
        </div>
    );
};

export default POstDetail;