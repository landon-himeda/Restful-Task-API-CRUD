const controller = require("./controller")

module.exports = function(app){
    app.get('/tasks', controller.index);
    app.get('/tasks/:id', controller.read);
    app.post('/tasks', controller.create);
    app.put('/tasks/:id', controller.update);
    app.delete('/tasks/:id', controller.delete);
}