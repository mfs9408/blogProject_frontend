import React, { useEffect, useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Post from '../../components/Post';
import { BaseServerResponse, PostInterface } from '../../types';
import { apiClient } from '../../Api';
import { useSelector } from '../../store';

const MyPosts = () => {
  const [myPosts, setMyPosts] = useState<PostInterface[] | null>(null);
  const [isAppInitialized, setIsAppInitialized] = useState<boolean>(false);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    apiClient
      .post<BaseServerResponse<PostInterface[]>>('/myposts', {
        userId: user?.id,
      })
      .then(({ data }) => setMyPosts(data.payload))
      .catch((e) => console.log(e));
    setIsAppInitialized(true);
  }, [user]);

  if (!isAppInitialized)
    return (
      <>
        <LinearProgress />
      </>
    );

  return (
    <>
      {Array.isArray(myPosts) && myPosts.length !== 0
        ? myPosts.map((post: PostInterface) => (
            <Post key={post._id} {...post} pointerEvent="auto" />
          ))
        : 'There are no posts yet'}
    </>
  );
};

export default MyPosts;
