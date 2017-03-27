import mongoose = require('mongoose');


var commentSchema = new mongoose.Schema({
    topicId: { type: mongoose.Schema.Types.ObjectId, required: true },
    student: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        avatar: { type: String, required: true }
    },
    content: { type: String, required: true },
    createDt: { type: Date, default: Date.now },
    updateDt: { type: Date, default: Date.now },

});

export interface IComment extends mongoose.Document {
    topicId: mongoose.Schema.Types.ObjectId;
    user: {
        name: String,
        email: String
    };
    content: String
    createDt: Date;
    updateDt: Date;
}

export var commentModel = mongoose.model<IComment>('Comment', commentSchema);