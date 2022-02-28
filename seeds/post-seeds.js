const { Post } = require('../models');

const postdata = [
  {
    title: 'This is post test 1',
    post_content: 'This is the content of post 1.',
    user_id: 1
  },
  {
    title: 'This is post test 2',
    post_content: 'This is the content of post 2.',
    user_id: 2
  },
  {
    title: 'This is post test 3',
    post_content: 'This is the content of post 3.',
    user_id: 3
  },
  {
    title: 'This is post test 4',
    post_content: 'This is the content of post 4.',
    user_id: 4
  },
  {
    title: 'This is post test 5',
    post_content: 'This is the content of post 5.',
    user_id: 5
  },
  {
    title: 'This is post test 6',
    post_content: 'This is the content of post 6.',
    user_id: 1
  },
  {
    title: 'This is post test 7',
    post_content: 'This is the content of post 7.',
    user_id: 1
  },
  {
    title: 'This is post test 8',
    post_content: 'This is the content of post 8.',
    user_id: 1
  },
  {
    title: 'This is post test 9',
    post_content: 'This is the content of post 9.',
    user_id: 1
  },
  {
    title: 'This is post test 10',
    post_content: 'This is the content of post 10.',
    user_id: 2
  },
  {
    title: 'This is post test 11',
    post_content: 'This is the content of post 11.',
    user_id: 2
  },
  {
    title: 'This is post test 12',
    post_content: 'This is the content of post 12.',
    user_id: 3
  },
  {
    title: 'This is post test 13',
    post_content: 'This is the content of post 13.',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;