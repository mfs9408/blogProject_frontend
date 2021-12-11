import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { apiClient } from '../../Api';
import Post from '../../components/Post';
import Menu from '../../components/Menu';
import useStyles from './PostPage.styles';
import Comments from '../../components/Comments';
import Template from '../../components/Template';
import { BaseServerResponse, PostInterface } from '../../types';

const PostPage = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [post, setPost] = useState<PostInterface | null>(null);

  useEffect(() => {
    apiClient
      .get<BaseServerResponse<PostInterface>>(`/post/${id}`)
      .then(({ data }) => setPost(data.payload))
      .catch((e) => console.log(e));
  }, []);

  if (!post) return null;

  return (
    <Template>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <Post {...post} />
            <Comments />
          </Grid>
          <Grid item sm={3} className={classes.grid}>
            <Menu />
          </Grid>
        </Grid>
      </Container>
    </Template>
  );
};

export default PostPage;
