import mongoose = require('mongoose');
mongoose.connect('mongodb://120.77.169.182/test');

export { commentModel, IComment } from './comment';
export { studentModel, IStudent } from './student';
export { ITopic, topicModel } from './topic';
