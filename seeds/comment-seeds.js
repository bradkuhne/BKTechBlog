const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This is comment 1',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'This is comment 2',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'This is comment 3',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'This is comment 4',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'This is comment 5',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'This is comment 6',
    user_id: 3,
    post_id: 5
  },
  {
    comment_text: 'This is comment 7',
    user_id: 9,
    post_id: 13
  },
  {
    comment_text: 'This is comment 8',
    user_id: 2,
    post_id: 4
  },
  {
    comment_text: 'This is comment 9',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'This is comment 10',
    user_id: 8,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;