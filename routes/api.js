

module.exports = function (app, db){

    //Read - GET
    app.get('/card/:username?', function(req, res, next) {
        var uname = req.params.username;
        console.log("This is the GET " + uname);
        var query = (uname) ? {"username": uname} : {};
        db.card.get(query, function(error, data) {
            console.log(data);
            res.send(data);
        });
    });

    app.post('/card', function(req, res, next) {
        var body = req.body;
        console.log("This is post " + typeof(body), body);
        db.card.add(body, function (error, data) {
            console.log("This is post " + data);
            res.status(200).end();
        });
    });

    //Update - PUT
    app.put('/card/:id', function(req, res, next) {
        var body = req.body;
        console.log("This is an update " + typeof(body), body);
        db.card.update({_id:req.params.id}, body, function (error, data) {
            console.log("This is an update " + data);
            res.status(200).end();
        });
    });

    //Delete - DEL
    app.delete('/card/:id', function(req, res, next) {
        db.card.remove({_id:req.params.id}, function (error, data) {
            console.log("This is a delete " + data);
            res.status(200).end();
        });
    });

    //See all
    app.get('/all', function(req, res, next) {
        res.render('index', { title: 'Express' });
    });

}
