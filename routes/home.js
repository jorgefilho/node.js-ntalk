
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

module.exports = function(app) {
	var home = app.controllers.home;
	app.get('/', home.index);
	app.post('/entrar', home.login);
	app.get('/sair', home.logout);
};