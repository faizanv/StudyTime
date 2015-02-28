


module.exports = function (app, db){

    /* GET home page. */
    app.get('/', function(req, res, next) {
      res.render('index', { title: 'Express' });
    });

}
