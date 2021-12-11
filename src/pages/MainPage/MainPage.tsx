import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Template from '../../components/Template';
import { apiClient } from '../../Api';
import { BaseServerResponse, PostInterface } from '../../types';
import useStyles from './MainPage.styles';
import Menu from '../../components/Menu';
import Post from '../../components/Post';

const MainPage = () => {
  const [posts, setPosts] = useState<PostInterface[] | null>(null);
  const [isAppInitialized, setIsAppInitialized] = useState<boolean>(false);
  const classes = useStyles();

  useEffect(() => {
    apiClient
      .get<BaseServerResponse<PostInterface[]>>('/1')
      .then(({ data }) => setPosts(data.payload))
      .catch((e) => console.log(e));
    setIsAppInitialized(true);
  }, []);

  if (!isAppInitialized)
    return (
      <Template>
        <LinearProgress />
      </Template>
    );

  return (
    <Template>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            {Array.isArray(posts) && posts.length !== 0
              ? posts.map((post: PostInterface) => (
                  <Post key={post._id} {...post} pointerEvent="auto" />
                ))
              : 'There are no posts'}
          </Grid>
          <Grid item sm={3} className={classes.grid}>
            <Menu />
          </Grid>
        </Grid>
      </Container>
    </Template>
  );
};

export default MainPage;
