import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiClient } from '../../Api';
import Post from '../../components/Post';
import Comments from '../../components/Comments';
import { BaseServerResponse, PostInterface } from '../../types';

const PostPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState<PostInterface | null>(null);

  useEffect(() => {
    apiClient
      .get<BaseServerResponse<PostInterface>>(`/post/${id}`)
      .then(({ data }) => setPost(data.payload))
      .catch((e) => console.log(e));
  }, []);

  if (!post) return null;

  return (
    <>
      <Post {...post} />
      <Comments />
    </>
  );
};

export default PostPage;
