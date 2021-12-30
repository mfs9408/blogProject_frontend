import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import objectHash from 'object-hash';
import ContentBuilder from '../ContentBuilder';
import { PostInterface } from '../../types';
import PostLink from '../PostLink';
import Rating from '../Rating';
import useStyles from './Post.styles';
import parseAndFormatDate from '../../utils/parseAndFormatDate';
import DeleteDialog from '../DeleteDialog';

const Post = ({
  id,
  user,
  rating,
  creatingDate,
  title,
  content,
  pointerEvent,
  usersScore,
  removable,
}: PostInterface) => {
  const classes = useStyles();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <Grid
      container
      justifyContent="flex-start"
      className={classes.root}
      key={objectHash(usersScore)}
    >
      <Grid item xs={1} className={classes.ratingSm}>
        <Rating rating={rating} postId={id} usersScore={usersScore} />
      </Grid>
      <Grid item xs={12} md={11}>
        <Paper className={classes.paper}>
          <Grid item container spacing={1} xs={12} className={classes.author}>
            <Grid item>
              <Typography variant="body2">{user.nickname}</Typography>
            </Grid>
            <Grid item className={classes.creatingDate}>
              <Typography variant="body2">
                {parseAndFormatDate(creatingDate)}
              </Typography>
            </Grid>
            <Grid item>
              {removable && (
                <CancelIcon
                  fontSize="small"
                  className={classes.dialogButton}
                  onClick={() => setIsDialogOpen(true)}
                />
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.title}>
            <PostLink to={id} pointerEvent={pointerEvent}>
              <Typography variant="h4">{title}</Typography>
            </PostLink>
          </Grid>
          <Grid>
            {content &&
              content.map((contentProperty) => (
                <ContentBuilder
                  key={contentProperty.id}
                  content={contentProperty}
                  user={user.nickname}
                  postId={id}
                />
              ))}
          </Grid>
          <Grid container className={classes.ratingMd}>
            <Rating rating={rating} postId={id} usersScore={usersScore} />
          </Grid>
        </Paper>
      </Grid>
      <DeleteDialog
        title={title}
        postId={id}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </Grid>
  );
};

export default Post;
