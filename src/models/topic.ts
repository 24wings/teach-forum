import mongoose = require('mongoose');

var topicSchema = new mongoose.Schema({
    student: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        avatar: String
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    tab: { type: String, required: true },
    pv: { type: Number, default: 0 },
    comment: { type: Number, default: 0 },
    createDt: { type: Date, default: Date.now },
    updateDt: { type: Date, default: Date.now }
});

export interface ITopic extends mongoose.Document {
    student: {
        name: String,
        email: String
    };
    title: String;
    content: String;
    tab: String;
    pv: Number;
    comment: Number;
    createDt: Date;
    updateDt: Date;
}

export var topicModel = mongoose.model<ITopic>('Topic', topicSchema);