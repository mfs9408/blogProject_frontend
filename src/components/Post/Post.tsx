import React from 'react';
import Grid from '@material-ui/core/Grid';
import { PostInterface } from '../../types';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import useStyles from './Post.styles';
import ContentBuilder from '../ContentBuilder';
import PostLink from '../PostLink';

const Post = ({
  _id,
  user,
  rating,
  creatingDate,
  title,
  content,
  pointerEvent,
}: PostInterface) => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="flex-start" className={classes.root}>
      <Grid item xs={1}>
        {rating}
      </Grid>
      <Grid item xs={11}>
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
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Post;
