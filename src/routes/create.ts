import express = require('express');
import { topicModel } from '../models';

import { checkLogin, checkParamsFromBody } from '../middlewares';

var router = express.Router();

router.route('/')
    .get(async (req, res, next) => {
        res.render('create');
    })
    .post(checkLogin, checkParamsFromBody('title', 'tab', 'content'), async (req, res, next) => {
        var { name, email, avatar } = res.locals.student;
        var topic = await new topicModel({
            student: {
                name,
                email,
                avatar
            },
            title: req.body.title,
            tab: req.body.tab,
            content: req.body.content
        }).save();
        res.redirect('/topic/' + topic._id);
    });

export { router as createRouter };
