import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PostInterface } from '../../types';
import Post from '../../components/Post';
import { useSelector } from '../../store';
import { PostService } from '../../services/PostService';
import { searchDataActions } from '../../store/searchData/slice';
import PageSkeleton from '../../components/PageSkeleton';

const MainPage = () => {
  const dispatch = useDispatch();

  const [posts, setPosts] = useState<PostInterface[] | null>(null);
  const [isAppInitialized, setIsAppInitialized] = useState<boolean>(false);
  const { searchValue } = useSelector((state) => state.searchData);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    PostService.fetchPosts(
      user?.id,
      setPosts,
      setIsAppInitialized,
      searchValue
    );
  }, [user, searchValue]);

  useEffect(() => {
    return () => {
      dispatch(searchDataActions.reset());
    };
  }, []);

  if (!isAppInitialized)
    return (
      <>
        <PageSkeleton />
      </>
    );

  return (
    <>
      {posts && posts.length > 0
        ? posts.map((post: PostInterface) => (
            <Post key={post.id} {...post} pointerEvent="auto" />
          ))
        : 'Постов нет'}
    </>
  );
};

export default MainPage;
