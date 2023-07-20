// Creating a simple variable that will store our user details

import { users } from '../models/users';

export var usersArray: users[] = [
  {
    first_name: 'John',
    last_name: 'Doe',
    username: 'JohnDoe',
    password: 'Password@123',
    email: 'johndoe@gmail.com',
    role: 'Admin',
  },
  {
    first_name: 'Mary',
    last_name: 'Doe',
    username: 'MaryDoe',
    password: 'PASSWORD@123',
    email: 'marydoe@gmail.com',
    role: 'Admin',
  },
  {
    first_name: 'Harry',
    last_name: 'Doe',
    username: 'HarryDoe',
    password: 'Password#321',
    email: 'harrydoe@gmail.com',
    role: 'User',
  },
  {
    first_name: 'Harry',
    last_name: 'Mack',
    username: 'HarryMack',
    password: 'Password#321',
    email: 'harrymack@gmail.com',
    role: 'User',
  },
  {
    first_name: 'James',
    last_name: 'Deep',
    username: 'JamesDeep',
    password: 'Password#213',
    email: 'jamesdeep@gmail.com',
    role: 'User',
  },
];
