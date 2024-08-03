import express from 'express';
import {
  createPost,
  featuredPost,
  getProfilePosts,
  getSavedPosts,
  getSinglePost,
  search,
  updatePost,
} from '../controllers/postsController.js';
import authorize from '../../../middlewares/authentication.js';

const Router = express.Router();

Router.route('/').post(authorize, createPost);
Router.route('/saved/:id').get(getSavedPosts);
Router.route('/featured').get(featuredPost);
Router.route('/search').get(search);
Router.route('/profile/:id').get(getProfilePosts);
Router.route('/find/:id').get(getSinglePost);
Router.route('/update/:id').patch(authorize, updatePost);

export default Router;
