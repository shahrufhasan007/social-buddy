import React from 'react';
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
      width: 345,
    },
    media: {
      height: 345,
    },
  });

const Posts = (props) => {
    const classes = useStyles();
    const { id, title } = props.post;
    return (
        <div>
            <Grid container justify="center">
                <Grid item>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://i.postimg.cc/SR9ZTfkx/download.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="h2">
                                <h3>User ID : {id}</h3> 
                        </Typography>
                            <Typography variant="body1" color="textPrimary" component="p">
                                <h4>Post Title : {title}</h4> 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="contained" color="secondary">
                            <Link to={`/posts/${id}`}>See More</Link>
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
            </Grid>

        </div>
    );
};

export default Posts;