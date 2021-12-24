import React, { FormEvent, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import useStyles from './NewPostPage.styles';
import { useSelector } from '../../store';
import { BaseServerResponse, PostType } from '../../types';
import ContentCreator from '../../components/FieldsCreator';
import AddContentField from '../../components/AddContentField';
import { postActions } from '../../store/postContent/slice';
import { apiClient } from '../../Api';

const NewPostPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const content = useSelector((state) => state.content);

  const [title, setTitle] = useState<string>('');

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const date = new Date();

    const post = {
      user: {
        author: user?.nickname,
        userId: user?.id,
      },
      title: title,
      creatingDate: date.toISOString(),
      content: content,
    };

    apiClient
      .post<BaseServerResponse<string>>('/newpost', {
        payload: post,
      })
      .then(({ data }) => {
        console.log(data.payload);
      });
  };

  useEffect(() => {
    return () => {
      dispatch(postActions.reset());
    };
  }, [dispatch]);

  return (
    <form onSubmit={onSubmit}>
      <Paper className={classes.paper}>
        <Grid container item>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Post title"
            name="title"
            color="secondary"
            required
            multiline
            value={title}
            className={classes.title}
            onChange={(event) => setTitle(event.target.value)}
          />
          {content.map((data: PostType) => (
            <ContentCreator key={data.id} {...data} />
          ))}
        </Grid>
        <AddContentField />
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={onSubmit}
        >
          Create post
        </Button>
      </Paper>
    </form>
  );
};

export default NewPostPage;
