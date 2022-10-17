const Post = require('../models/Post');

const User = require('../models/User');

exports.index = async (req, res, next) => {
	const posts = await Post.findAll({
		raw: true,
		include: User ,
		nest : true
	   });
	
	res.render('posts/list',{layout: 'web_layout', 'posts': posts});
};

exports.create = (req, res, next) => {
	let data = req.body
	let loggedInUser = req.session.user
	let post = new Post({
		title: data.title,
		content: data.content,
		userId: loggedInUser.id
	}).save();

	res.redirect('/posts');
};

exports.delete = async (req, res, next) => {
	let data = req.params
	let loggedInUser = req.session.user
	await Post.destroy({
		where: {
		  id: data.id
		}
	  });

	res.redirect('/posts');
};
exports.createPage = (req, res, next) => {
	res.render('posts/create',{layout: 'web_layout'});
};
