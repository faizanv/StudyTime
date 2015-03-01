module.exports = function(app, db) {

    /* GET home page. */
    app.get('/', function(req, res, next) {
        console.log("root called");
        res.render('index', {
            title: 'Express'
        });
    });

}
