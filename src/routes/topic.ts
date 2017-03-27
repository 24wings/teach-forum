import express = require('express');
import { topicModel, studentModel, IStudent, commentModel, IComment } from '../models';

var router = express.Router();

router.route('/:_id')
    .get(async (req, res, next) => {
        var topic = await topicModel.findById(req.params._id).exec();
        var author = await studentModel.findOne({ email: topic.student.email }).exec();
        var comments = await commentModel.find({ topicId: topic._id }).exec();
        res.render('topic', {
            topic,
            author,
            comments
        });
        console.log(comments);
    })
    // 提交评论
    .post(async (req, res, next) => {
        if (res.locals.student) {
            var student = res.locals.student;
            var { topicId, content } = req.body;

            var topic = await topicModel.findById(topicId).exec();
            var author = await studentModel.findOne({ email: topic.student.email }).exec();
            var comment = await new commentModel({
                topicId: topic._id,
                content, student: {
                    name: student.name,
                    email: student.email,
                    avatar: student.avatar
                }
            }).save();
            var comments = await commentModel.find({ topicId }).exec();

            res.render('topic', {
                success: '评论成功',
                topic,
                author,
                comments
            });

        } else {
            res.render('topic', {
                error: '请先登录'
            })
        }
    });

export { router as topicRouter };