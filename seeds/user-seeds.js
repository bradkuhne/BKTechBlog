const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'test1',
    email: 'test1@gmail.com',
    password: 'pw12345'
  },
  {
    username: 'test2',
    email: 'test2@gmail.com',
    password: 'pw12345'
  },
  {
    username: 'test3',
    email: 'test3@gmail.com',
    password: 'pw12345'
  },
  {
    username: 'test4',
    email: 'test4@gmail.com',
    password: 'pw12345'
  },
  {
    username: 'test5',
    email: 'test5@gmail.com',
    password: 'pw12345'
  },
  {
    username: 'test6',
    email: 'test6@gmail.com',
    password: 'pw12345'
  },
  {
    username: 'test7',
    email: 'test7@gmail.com',
    password: 'pw12345'
  },
  {
    username: 'test8',
    email: 'test8@gmail.com',
    password: 'pw12345'
  },
  {
    username: 'test9',
    email: 'test9@gmail.com',
    password: 'pw12345'
  },
  {
    username: 'test10',
    email: 'test10@gmail.com',
    password: 'pw12345'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;