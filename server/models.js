var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_tasks_api_db', {useNewUrlParser: true});
var TaskSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Title is required"], minlength: [2, "Title must be at least 2 characters long"]},
    description: { type: String, default: "" },
    completed: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = { Task: mongoose.model('Task', TaskSchema) };