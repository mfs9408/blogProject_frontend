import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../../components/Post';
import Comments from '../../components/Comments';
import { PostInterface } from '../../types';
import { useSelector } from '../../store';
import { PostService } from '../../services/PostService';

const PostPage = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);
  const [post, setPost] = useState<PostInterface | null>(null);

  useEffect(() => {
    PostService.fetchPost(id, user?.id)
      .then(({ data }) => setPost(data.payload))
      .catch((e) => console.log(e));
  }, [user]);

  if (!post) return null;

  return (
    <>
      <Post {...post} />
      <Comments />
    </>
  );
};

export default PostPage;
