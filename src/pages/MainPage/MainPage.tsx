import React, { useEffect, useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { apiClient } from '../../Api';
import { BaseServerResponse, PostInterface } from '../../types';
import Post from '../../components/Post';
import { useSelector } from '../../store';

const MainPage = () => {
  const [posts, setPosts] = useState<PostInterface[] | null>(null);
  const [isAppInitialized, setIsAppInitialized] = useState<boolean>(false);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    apiClient
      .post<BaseServerResponse<PostInterface[]>>('/authposts/1', {
        userId: user?.id,
      })
      .then(({ data }) => {
        setPosts(data.payload);
        return setIsAppInitialized(true);
      })
      .catch((e) => console.log(e));
  }, [user]);

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
