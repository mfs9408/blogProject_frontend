import { Dispatch, SetStateAction } from 'react';
import {
  BaseServerResponse,
  PostInterface,
  PostType,
  UserInterface,
} from '../types';
import { apiClient } from '../Api';

export class PostService {
  static createNewPost(
    user: UserInterface | null | undefined,
    title: string,
    content: PostType[],
    imgArray: File[]
  ) {
    const date = new Date();
    const post = {
      user: {
        nickname: user?.nickname,
        userId: user?.id,
      },
      title: title,
      creatingDate: date.toISOString(),
      content: content,
    };

    const formData = new FormData();
    imgArray.map((file: File) => formData.append(file.name, file));
    formData.append('post', JSON.stringify(post));

    return apiClient
      .post<BaseServerResponse<string>>('/newpost', formData)
      .then(({ data }) => data.payload)
      .catch((e) => console.log(e));
  }

  static fetchPosts(
    userId: string | undefined,
    setPosts: Dispatch<SetStateAction<PostInterface[] | null>>,
    setIsAppInitialized: Dispatch<SetStateAction<boolean>>
  ) {
    return apiClient
      .post<BaseServerResponse<PostInterface[]>>('/authposts/1', {
        userId: userId,
      })
      .then(({ data }) => {
        setPosts(data.payload);
        return setIsAppInitialized(true);
      })
      .catch((e) => console.log(e));
  }

  static fetchMyPosts(
    userId: string | undefined,
    setPosts: Dispatch<SetStateAction<PostInterface[] | null>>,
    setIsAppInitialized: Dispatch<SetStateAction<boolean>>
  ) {
    return apiClient
      .post<BaseServerResponse<PostInterface[]>>('/myposts', {
        userId: userId,
      })
      .then(({ data }) => {
        setPosts(data.payload);
        return setIsAppInitialized(true);
      })
      .catch((e) => console.log(e));
  }

  static async fetchPost(
    id: string | undefined,
    userId: string | undefined,
    setPost: Dispatch<SetStateAction<PostInterface | null>>
  ) {
    return apiClient
      .post<BaseServerResponse<PostInterface>>(`/${id}`, { userId: userId })
      .then(({ data }) => setPost(data.payload))
      .catch((e) => console.log(e));
  }

  static async fetchRating(
    userId: string | undefined,
    postId: string,
    score: number,
    setRate: Dispatch<SetStateAction<number>>
  ) {
    apiClient
      .post<BaseServerResponse<PostInterface>>('/changerate', {
        userId: userId,
        postId: postId,
        rating: score,
      })
      .then(({ data }) => {
        setRate(data.payload.rating);
      });
  }
}
