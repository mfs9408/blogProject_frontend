import jwt_decode from 'jwt-decode';
import { get, post } from '../Api';
import { BaseServerResponse, UserResponseInterface } from '../types';

export class AuthServiceBase {
  accessToken: string | null = null;

  refreshToken: string | null = null;

  static async registration(email: string, nickname: string, password: string) {
    const { data } = await post<UserResponseInterface>('/registration', {
      payload: {
        email,
        nickname,
        password,
      },
    });

    localStorage.setItem('token', data.tokens.refreshToken);
    return jwt_decode(data.tokens.refreshToken);
  }

  static async login(email: string, password: string) {
    const { data } = await post<BaseServerResponse<UserResponseInterface>>(
      '/login',
      {
        email,
        password,
      },
      { headers: {}, withCredentials: true }
    );

    localStorage.setItem('token', data.payload.tokens.refreshToken);
    return data.payload;
  }

  static async check() {
    const { data } = await get<BaseServerResponse<UserResponseInterface>>(
      '/refresh',
      { headers: {}, withCredentials: true }
    );

    localStorage.setItem('token', data.payload.tokens.refreshToken);
    return data;
  }

  static async logout() {
    const { data } = await get('/logout', {
      headers: {},
      withCredentials: true,
    });
    console.log(data);

    localStorage.clear();
    return data;
  }
}
