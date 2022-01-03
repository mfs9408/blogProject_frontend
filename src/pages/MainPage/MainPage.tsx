import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PostInterface } from '../../types';
import Post from '../../components/Post';
import { useSelector } from '../../store';
import { PostService } from '../../services/PostService';
import { searchDataActions } from '../../store/searchData/slice';
import PageSkeleton from '../../components/PageSkeleton';
import NoPosts from '../../components/NoPosts';

const SKELETON_QUANTITY = [1, 2, 3];

const MainPage = () => {
  const dispatch = useDispatch();

  const [posts, setPosts] = useState<PostInterface[] | null>(null);
  const [isAppInitialized, setIsAppInitialized] = useState<boolean>(false);
  const { searchValue } = useSelector((state) => state.searchData);
  const { user } = useSelector((state) => state.user);

  const page = 1;

  useEffect(() => {
    PostService.fetchPosts(user?.id, searchValue, page)
      .then(({ data }) => {
        setPosts(data.payload);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsAppInitialized(true));
  }, [user, searchValue]);

  useEffect(() => {
    return () => {
      dispatch(searchDataActions.reset());
    };
  }, [dispatch]);

  if (!isAppInitialized)
    return (
      <>
        {SKELETON_QUANTITY.map((number) => (
          <PageSkeleton key={number} />
        ))}
      </>
    );

  return (
    <>
      {posts && posts.length > 0 ? (
        posts.map((post: PostInterface) => (
          <Post key={post.id} {...post} pointerEvent="auto" />
        ))
      ) : (
        <NoPosts />
      )}
    </>
  );
};

export default MainPage;
