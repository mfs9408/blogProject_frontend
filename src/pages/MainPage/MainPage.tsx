import React, { useEffect, useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { PostInterface } from '../../types';
import Post from '../../components/Post';
import { useSelector } from '../../store';
import { PostService } from '../../services/PostService';

const MainPage = () => {
  const [posts, setPosts] = useState<PostInterface[] | null>(null);
  const [isAppInitialized, setIsAppInitialized] = useState<boolean>(false);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    PostService.fetchPosts(user?.id, setPosts, setIsAppInitialized);
  }, [user]);

  if (!isAppInitialized)
    return (
      <>
        <LinearProgress />
      </>
    );

  return (
    <>
      {posts &&
        posts.map((post: PostInterface) => (
          <Post key={post.id} {...post} pointerEvent="auto" />
        ))}
    </>
  );
};

export default MainPage;
