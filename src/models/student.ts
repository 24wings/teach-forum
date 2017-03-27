import mongoose = require('mongoose');


var studentSchema = new mongoose.Schema({
    // 学生的名字
    name: String,
    avatar: String,
    password: String,
    gender: String,
    email: String,
    signature: String,
    createDt: { type: Date, default: Date.now },
    updateDt: { type: Date, default: Date.now }
});


export interface IStudent extends mongoose.Document {
    avatar: string;
    name: string;
    password: string;
    gender: string;
    email: string;
    signature: string;
}

export var studentModel = mongoose.model<IStudent>('Student', studentSchema);
