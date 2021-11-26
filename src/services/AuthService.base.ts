import { apiClient } from '../Api';
import jwt_decode from 'jwt-decode';

interface BaseServerResponseInterface {
  data: RegistrationResponseInterface;
}

interface RegistrationResponseInterface {
  tokens: TokensInterface;
  user: UserInterface;
}

interface UserInterface {
  email: string;
  id: string;
  role: [string];
  nickname: string;
}

interface TokensInterface {
  refreshToken: string;
  accessToken: string;
}

export class AuthServiceBase {
  static async registration(email: string, nickname: string, password: string) {
    const { data } = (await apiClient.post('/registration', {
      payload: {
        email,
        nickname,
        password,
      },
    })) as BaseServerResponseInterface;

    localStorage.setItem('token', data.tokens.refreshToken);
    return jwt_decode(data.tokens.refreshToken);
  }
}
