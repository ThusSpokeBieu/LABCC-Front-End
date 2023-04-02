import { User } from './user.model';

export class UserAuthDto {
  id: number;
  name: string;
  email: string;
  cnpj: string;
  company: string;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.cnpj = user.cnpj;
    this.company = user.company;
  }
}
