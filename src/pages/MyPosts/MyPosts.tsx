import React, { useEffect, useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Post from '../../components/Post';
import { PostInterface } from '../../types';
import { useSelector } from '../../store';
import { PostService } from '../../services/PostService';

const MyPosts = () => {
  const [myPosts, setMyPosts] = useState<PostInterface[] | null>(null);
  const [isAppInitialized, setIsAppInitialized] = useState<boolean>(false);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    PostService.fetchMyPosts(user?.id, setMyPosts, setIsAppInitialized);
  }, [user]);

  if (!isAppInitialized)
    return (
      <>
        <LinearProgress />
      </>
    );

  return (
    <>
      {myPosts &&
        myPosts.map((post: PostInterface) => (
          <Post key={post.id} {...post} pointerEvent="auto" />
        ))}
    </>
  );
};

export default MyPosts;
