import {
  BaseServerResponse,
  PostInterface,
  PostType,
  UserInterface,
} from '../types';
import { apiClient } from '../Api';

export class PostService {
  static createNewPost(
    user: UserInterface | undefined | null,
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

    return apiClient.post<BaseServerResponse<string>>('/newpost', formData);
  }

  static fetchPosts(
    userId: string | undefined,
    searchValue: string | null,
    page: number
  ) {
    return apiClient.post<BaseServerResponse<PostInterface[]>>(
      `/allposts/${page}`,
      {
        userId: userId,
        searchValue: searchValue,
      }
    );
  }

  static fetchMyPosts(userId: string | undefined) {
    return apiClient.post<BaseServerResponse<PostInterface[]>>('/myposts', {
      userId: userId,
    });
  }

  static async fetchPost(id: string | undefined, userId: string | undefined) {
    return apiClient.post<BaseServerResponse<PostInterface>>(`/${id}`, {
      userId: userId,
    });
  }

  static async deletePost(postId: string) {
    return apiClient.post<BaseServerResponse<boolean>>('/deletepost', {
      postId: postId,
    });
  }

  static async fetchRating(
    userId: string | undefined,
    postId: string,
    score: number
  ) {
    return apiClient.post<BaseServerResponse<PostInterface>>('/changerate', {
      userId: userId,
      postId: postId,
      rating: score,
    });
  }
}
