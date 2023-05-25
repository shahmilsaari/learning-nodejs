import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  users = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Abu' },
    { id: 3, name: 'Atan' },
    { id: 4, name: 'Ahmad' },
  ];
  create(data: { name: string }) {
    if (this.users.find((user) => user.name == data.name))
      throw new BadRequestException('name already exist');

    return { id: 5, name: data.name };
  }

  findAll() {
    const users = this.users;
    return users;
  }

  findOne(id: number) {
    return this.users.find((i) => i.id == id);
  }

  update(id: number, data: { name: string }) {
    const user = this.users.find((user) => user.id == id);
    user.name = data.name;
    return user;
  }

  remove(id: number) {
    return this.users.filter((i) => i.id.toString() !== id.toString());
  }
}
