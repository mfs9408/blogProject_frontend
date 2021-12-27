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
  id: string;
  user: UserInterface;
  title: string;
  content: ContentInterface[];
  rating: number;
  creatingDate: string;
  pointerEvent?: 'auto' | 'none' | undefined;
  usersScore: number;
}

export type ContentInterface = TextProperty | ImgProperty;

export interface UserInterface {
  nickname: string;
  userId: string;
}

interface BaseContentProperty<T, V> {
  id: string;
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

export type PostType = {
  type: string;
  value?: string;
  id: string;
};
