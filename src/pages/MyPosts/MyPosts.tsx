import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ContextStore } from '../../components/MyPostsProvider/MyPostsProvider';
import { searchDataActions } from '../../store/searchData/slice';
import { PostService } from '../../services/PostService';
import PageSkeleton from '../../components/PageSkeleton';
import NoPosts from '../../components/NoPosts';
import { PostInterface } from '../../types';
import Post from '../../components/Post';
import { useSelector } from '../../store';

const SKELETON_QUANTITY = [1, 2, 3];

const MyPosts = () => {
  const dispatch = useDispatch();
  const { myPosts, setMyPosts } = useContext(ContextStore);

  const [isAppInitialized, setIsAppInitialized] = useState<boolean>(false);
  const { searchValue } = useSelector((state) => state.searchData);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    PostService.fetchMyPosts(user?.id)
      .then(({ data }) => {
        setMyPosts(data.payload);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsAppInitialized(true));
  }, [user, searchValue, setMyPosts]);

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
      {myPosts && user && myPosts.length > 0 ? (
        myPosts.map((post: PostInterface) => (
          <Post key={post.id} {...post} pointerEvent="auto" />
        ))
      ) : (
        <NoPosts />
      )}
    </>
  );
};

export default MyPosts;
