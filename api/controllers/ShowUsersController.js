/**
 * ShowUsersController
 *
 * @description :: Server-side logic for managing showusers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
		'show': function (req,res){
			console.log(User);
		User.findAll().exec(function(err, users){
			console.log(users);
			res.view({
				userlist: users,
				dummy: "dummy"
			});
		});
			//get all the users


		
	}
};

