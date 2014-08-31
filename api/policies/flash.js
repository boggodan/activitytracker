//handles flash messages for form validation

module.exports = function(req,res,next){

	console.log("applying policy");
	res.locals.flash = {};
	console.log('1');
	if(!req.session.flash) return next();

	console.log('2');

	res.locals.flash = _.clone(req.session.flash);
	req.session.flash = {};
	console.log('3');
	next();

};