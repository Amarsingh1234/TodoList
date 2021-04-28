var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    done: {
        type: Boolean, 
        required: true,
        default: false
    }
});

module.exports = mongoose.model("Todo",todoSchema);