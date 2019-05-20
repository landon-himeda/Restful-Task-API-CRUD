const Models = require("./models");

module.exports = {
    index: (request, response) => {
        Models.Task.find().sort({'createdAt': -1})
            .then((result) => {
                response.json({message: "Success", data: result});
            })
            .catch((err) => {
                console.log(err);
                response.json({message: "Error", error: err});
            });
    },

    read: (request, response) => {
        Models.Task.findById(request.params.id)
            .then((result) => {
                response.json({message: "Success", data: result});
            })
            .catch((err) => {
                console.log(err);
                response.json({message: "Error", error: err});
            });
    },

    create: (request, response) => {
        Models.Task.create(request.body)
            .then((result) => {
                response.json({message: "Success", data: result});
            })
            .catch((err) => {
                console.log(err);
                response.json({message: "Error", error: err});
            });
    },

    update: (request, response) => {
        Models.Task.findByIdAndUpdate(request.params.id, request.body, {runValidators: true})
            .then((result) => {
                response.json({message: "Success", data: result});
            })
            .catch((err) => {
                console.log(err);
                response.json({message: "Error", error: err});
            });
    },

    delete: (request, response) => {
        Models.Task.findByIdAndRemove(request.params.id)
            .then((result) => {
                response.json({message: "Success", data: result});
            })
            .catch((err) => {
                console.log(err);
                response.json({message: "Error", error: err});
            });
    },
}