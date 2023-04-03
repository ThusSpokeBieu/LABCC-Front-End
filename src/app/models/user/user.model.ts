import { UserRegisterDto } from './user-register.dto';
import { hash } from 'argon2';
export class User {
  id!: number;
  name!: string;
  company!: string;
  cnpj!: string;
  email!: string;
  password!: string;
  updatedAt!: Date;
  createdAt!: Date;

  constructor(newUser: UserRegisterDto | null) {
    if (!!newUser) {
      this.name = newUser?.name;
      this.company = newUser?.company;
      this.cnpj = newUser?.cnpj;
      this.email = newUser?.email;
      this.hashPass(newUser?.password);
    }
    this.updatedAt = new Date();
    this.createdAt = new Date();
  }

  async hashPass(pass: string) {
    this.password = await hash(pass);
  }
}
