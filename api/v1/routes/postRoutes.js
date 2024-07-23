import express from 'express';
import {
  createPost,
  featuredPost,
  getProfilePosts,
  getSavedPosts,
  getSinglePost,
  search,
} from '../controllers/postsController.js';
import authorize from '../../../middlewares/authentication.js';

const Router = express.Router();

Router.route('/').post(authorize, createPost);
Router.route('/').get(authorize, getProfilePosts);
Router.route('/saved').get(authorize, getSavedPosts);
Router.route('/featured').get(featuredPost);
Router.route('/search').get(search);
Router.route('/find/:id').get(getSinglePost);

export default Router;
