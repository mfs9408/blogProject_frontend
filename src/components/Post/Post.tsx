import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ContentBuilder from '../ContentBuilder';
import { PostInterface } from '../../types';
import PostLink from '../PostLink';
import Rating from '../Rating';
import useStyles from './Post.styles';
import objectHash from 'object-hash';

const Post = ({
  _id,
  user,
  rating,
  creatingDate,
  title,
  content,
  pointerEvent,
  usersScore,
}: PostInterface) => {
  const classes = useStyles();

  return (
    <Grid
      container
      justifyContent="flex-start"
      className={classes.root}
      key={objectHash(usersScore)}
    >
      <Grid item xs={1} className={classes.ratingSm}>
        <Rating rating={rating} postId={_id} usersScore={usersScore} />
      </Grid>
      <Grid item xs={12} md={11}>
        <Paper className={classes.paper}>
          <Grid item container spacing={1} xs={12} className={classes.author}>
            <Grid item>
              <Typography variant="body2">{user.author}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">{creatingDate}</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.title}>
            <PostLink to={_id} pointerEvent={pointerEvent}>
              <Typography variant="h4">{title}</Typography>
            </PostLink>
          </Grid>
          <Grid>
            {content.map((contentProperty) => (
              <ContentBuilder
                key={contentProperty._id}
                content={contentProperty}
                user={user.author}
              />
            ))}
          </Grid>
          <Grid container className={classes.ratingMd}>
            <Rating rating={rating} postId={_id} usersScore={usersScore} />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Post;
