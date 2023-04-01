export interface ILoginData {
  email: string;
  password: string;
}

export class LoginData implements ILoginData {
  email: string;
  password: string;

  constructor(data: ILoginData) {
    this.email = data.email;
    this.password = data.password;
  }
}
