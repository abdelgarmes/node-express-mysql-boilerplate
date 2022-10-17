const express = require('express');
const router = express.Router();
const HomeController = require('../app/controllers/HomeController');
const AuthController = require('../app/controllers/AuthController');
const PostController = require('../app/controllers/PostController');

router.get('/', HomeController.homePage);
router.get('/login', AuthController.loginPage);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);
router.get('/sign-up', AuthController.signUpPage);
router.post('/sign-up', AuthController.signUp);
router.get('/forgot-password', AuthController.forgotPasswordPage);
router.post('/forgot-password', AuthController.forgotPassword);

//Posts
router.get('/post/create', PostController.createPage);
router.get('/post/delete/:id', PostController.delete);
router.post('/post/create', PostController.create);
router.get('/posts', PostController.index);
module.exports = router;