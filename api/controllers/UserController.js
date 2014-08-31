/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	'new': function (req,res){
	
		res.view();
		
	},

	create: function (req,res, next){
		User.create(req.params.all(),function userCreated(err,user){
				if (err) 
				{
						//return next(err);
						req.session.flash={
							err:err
						}
						return res.redirect('/user/new');	
				}

				//res.json(user);
				//req.session.flash = {};
				res.redirect('/user/show/'+user.id)
		});
	},

	destroy: function(res,res,next){
		console.log("Destroying user record.");
		var userName = res.params.usr;

	},

	'login': function (req,res, next){
		res.view();
	},

	//user login attempt
	userLogin: function (req,res, next){
	console.log("user attempts login");
		//todo: log-in the user and then redirect them to the index
		//check user exists
	},

	'show': function (req,res){
			User.findOne(req.param('id'), function foundUser(err, user){
				if (err) return next(err);
				if (!user) return next();
				res.view({
					user: user
				});
			});
	},

	index: function(req,res,next){
		User.find(function foundUsers(err, users){
			res.view({
				users: users
			});
		});
	},

	edit: function(req,res,next){
		User.findOne(req.param('id'), function foundUser (err,user){
			if(err) return next(err);
			if(!user) return next();

			res.view({
				user: user
			});
		});
	},

	update: function(req,res,next){
		User.update(req.param('id'), req.params.all(), function userUpdated(err){
			if(err){
				return res.redirect('/user/edit'+req.param('id'));
			}
			res.redirect('/user/show/'+req.param('id'));
		});
	}
};

