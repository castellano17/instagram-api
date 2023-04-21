const uuid = require("uuid");
const Posts = require("../models/posts.models");

const findAllPosts = async () => {
  const posts = await Posts.findAll();
  return posts;
};

const findPostById = async () => {
  const post = await Posts.findOne({
    where: {
      id: id,
    },
  });
  return post;
};

const createPost = async (postObj) => {
  const newPost = await Posts.create({
    id: uuid.v4(),
    content: postObj.content,
    userId: postObj.userId,
  });
  return newPost;
};

const updatePost = async (postId, postObj) => {
  const selectedPost = Posts.findOne({
    where: {
      id: postId,
    },
  });
  if (!selectedPost) return null;
  const updatedPost = await selectedPost.update(postObj);
  return updatedPost;
};

const deletePost = async (postId) => {
  const selectedPost = Posts.findOne({
    where: {
      id: postId,
    },
  });
  if (!selectedPost) return null;
  const updatedPost = await selectedPost.update({
    status: "deleted",
  });
  return updatedPost;
};

module.exports = {
  findAllPosts,
  findPostById,
  createPost,
  updatePost,
  deletePost,
};
