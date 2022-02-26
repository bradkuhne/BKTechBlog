const { Post } = require('../models');

const postdata = [
  {
    title: 'This is post test 1',
    post_url: 'http://www.google.com',
    user_id: 1
  },
  {
    title: 'This is post test 2',
    post_url: 'http://www.google.com',
    user_id: 2
  },
  {
    title: 'This is post test 3',
    post_url: 'http://www.google.com',
    user_id: 3
  },
  {
    title: 'This is post test 4',
    post_url: 'http://www.google.com',
    user_id: 4
  },
  {
    title: 'This is post test 5',
    post_url: 'http://www.google.com',
    user_id: 5
  },
  {
    title: 'This is post test 6',
    post_url: 'http://www.google.com',
    user_id: 1
  },
  {
    title: 'This is post test 7',
    post_url: 'http://www.google.com',
    user_id: 1
  },
  {
    title: 'This is post test 8',
    post_url: 'http://www.google.com',
    user_id: 1
  },
  {
    title: 'This is post test 9',
    post_url: 'http://www.google.com',
    user_id: 1
  },
  {
    title: 'This is post test 10',
    post_url: 'http://www.google.com',
    user_id: 2
  },
  {
    title: 'This is post test 11',
    post_url: 'http://www.google.com',
    user_id: 2
  },
  {
    title: 'This is post test 12',
    post_url: 'http://www.google.com',
    user_id: 3
  },
  {
    title: 'This is post test 13',
    post_url: 'http://www.google.com',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;