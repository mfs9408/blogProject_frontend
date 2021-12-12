import React, { useEffect, useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { apiClient } from '../../Api';
import { BaseServerResponse, PostInterface } from '../../types';
import Post from '../../components/Post';

const MainPage = () => {
  const [posts, setPosts] = useState<PostInterface[] | null>(null);
  const [isAppInitialized, setIsAppInitialized] = useState<boolean>(false);

  useEffect(() => {
    apiClient
      .get<BaseServerResponse<PostInterface[]>>('/1')
      .then(({ data }) => setPosts(data.payload))
      .catch((e) => console.log(e));
    setIsAppInitialized(true);
  }, []);

  if (!isAppInitialized)
    return (
      <>
        <LinearProgress />
      </>
    );

  return (
    <>
      {Array.isArray(posts) && posts.length !== 0
        ? posts.map((post: PostInterface) => (
            <Post key={post._id} {...post} pointerEvent="auto" />
          ))
        : 'There are no posts'}
    </>
  );
};

export default MainPage;
