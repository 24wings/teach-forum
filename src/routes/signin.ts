import express = require('express');
import { checkParamsFromBody } from '../middlewares';
import { studentModel, IStudent, topicModel, ITopic } from '../models';
import gravatar = require('gravatar');
var router = express.Router();


router.route('/')
    .get((req, res, next) => {
        res.render('signin');
    })
    .post(checkParamsFromBody('name', 'password'),
    async (req, res) => {
        var student = await studentModel.findOne({ name: req.body.name, password: req.body.password }).exec();
        if (student) {
            var articles = await topicModel.find({ 'student.name': student.name, 'student.email': student.email }).exec();

            req.session.student = student;
            res.locals.student = student;
            res.render('student/index', {
                success: '欢迎回来,' + req.body.name,
                articles: articles
            });
        } else {
            res.render('signin', { error: '该用户不存在' });
        }
    })

export { router as signinRouter };