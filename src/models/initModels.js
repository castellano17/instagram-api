const Users = require("./users.models");
const Posts = require("./posts.models");
const Likes = require("./likes.models");
const Follows = require("./follows.models");
const Comments = require("./comments.models");
const PostsMultimedia = require("./posts_multimedia.models");

const initModels = () => {
  //? hasOne // un usuario tiene un post (esos son ejemplos)
  //? hasMany
  //? belongsTo // un usuario pertenece a una publicación
  //? belongsToMany // muchos usuarios pertenecen a muchas publicaciones

  //* Users 1:M Post

  Users.hasMany(Posts);
  Posts.belongsTo(Users);

  //*  Posts 1:M Commenst
  Posts.hasMany(Comments);
  Comments.belongsTo(Posts);

  //* Users 1:M Commenst
  Users.hasMany(Comments);
  Comments.belongsTo(Users);

  //* Post 1:M PostsMultimedia
  Posts.hasMany(PostsMultimedia);
  PostsMultimedia.belongsTo(Posts);

  //*  Users 1:M Likes
  Users.hasMany(Likes);
  Likes.belongsTo(Users);

  //* Posts 1:M Likes
  Posts.hasMany(Likes);
  Likes.belongsTo(Posts);

  Users.hasMany(Follows);
  //* Users 1:M Follows
  Follows.belongsTo(Users, {
    foreignKey: "userId",
    as: "follower",
  });

  //* Users 1:M Follows
  Follows.belongsTo(Users, {
    foreignKey: "userId2",
    as: "followed",
  });
};

module.exports = initModels;
