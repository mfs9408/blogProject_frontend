import { Dispatch, SetStateAction } from 'react';

export interface BaseServerResponse<T> {
  payload: T;
}

export interface GetUserResponse
  extends BaseServerResponse<UserResponseInterface> {}

export interface UserResponse {
  data: UserResponseInterface;
}

export interface UserResponseInterface {
  tokens: TokensInterface;
  user: UserInterface;
}

export interface UserInterface {
  email: string;
  id: string;
  role: [string];
  nickname: string;
}

interface TokensInterface {
  refreshToken: string;
  accessToken: string;
}

export interface AllPostsResponse
  extends BaseServerResponse<PostInterface[] | null> {}

export interface PostInterface {
  _id: string;
  user: AuthorInterface;
  title: string;
  content: ContentInterface[];
  rating: number;
  creatingDate: string;
  pointerEvent?: 'auto' | 'none' | undefined;
}

export type ContentInterface = TextProperty | ImgProperty;

interface AuthorInterface {
  author: string;
  userId: string;
}

interface BaseContentProperty<T, V> {
  _id: string;
  type: T;
  value: V;
}

type TextProperty = BaseContentProperty<'string', string>;
type ImgProperty = BaseContentProperty<'img', string>;

export interface RegistrationInterface {
  setIsRegistration: Dispatch<SetStateAction<boolean>>;
  isRegistration: boolean;
}

export interface AuthorizationData {
  email: string;
  password: string;
}
