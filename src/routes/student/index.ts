import express = require('express');
import { topicModel, ITopic } from '../../models';

import { checkLogin } from '../../middlewares';
var router = express.Router();

router.route('/')
    .get(checkLogin, async (req, res, next) => {
        var student = res.locals.student;

        var articles = await topicModel.find({ 'student.email': student.email }).exec();


        res.render('student/index', {
            selectedTable: req.query.tab,
            articles
        });
    });

export { router as studentIndexRouter };