import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    // class
    {
      id: 1,
      name: 'joey',
      email: 'joey@gmail.com',
      role: 'DEV',
    },
    {
      id: 2,
      name: 'joey2',
      email: 'joey2@gmail.com',
      role: 'DEV',
    },
    {
      id: 3,
      name: 'joey3',
      email: 'joey3@gmail.com',
      role: 'DEV',
    },
    {
      id: 4,
      name: 'joey4',
      email: 'joey4@gmail.com',
      role: 'DEV',
    },
    {
      id: 5,
      name: 'joey5',
      email: 'joey5@gmail.com',
      role: 'DEV',
    },
  ];

  //methods
  //these five methods match the five routes in our user controller
  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role); //only returns user that has a role that was passed in
    }
    return this.users; //if not just return all users
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id); //finds user that match the user id
    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    const usersByHighestId = [...this.users].sort((a, b) => (b.id = a.id)); //sort users by highest id

    const newUser = {
      // auto generate new user with unique id
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser); // push new user to the existing array
    return newUser;
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.findOne(id); //return updated user
  }

  delete(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id); //exclude user that needs to be removed

    return removedUser; // return user after removing the excluded user
  }
}
