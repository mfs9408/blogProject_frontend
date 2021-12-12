import React, { useEffect, useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Post from '../../components/Post';
import { BaseServerResponse, PostInterface } from '../../types';
import { apiClient } from '../../Api';

const MyPosts = () => {
  const [posts, setPosts] = useState<PostInterface[] | null>(null);
  const [isAppInitialized, setIsAppInitialized] = useState<boolean>(false);

  useEffect(() => {
    apiClient
      .get<BaseServerResponse<PostInterface[]>>('/myposts')
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
        : 'There are no posts yet'}
    </>
  );
};

export default MyPosts;
