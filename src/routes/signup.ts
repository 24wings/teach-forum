import express = require('express');
import { checkParamsFromBody } from '../middlewares/index';
import { studentModel, IStudent } from '../models';
import gravatar = require('gravatar');

var router = express.Router();



router.route('/')
    .get((req, res, next) => {
        res.render('signup');
    })
    .post(checkParamsFromBody('name', 'password', 'email', 'signature', 'repassword', 'gender'),
    async (req, res, next) => {
        if (req.body.password == req.body.repassword) {
            var avatar = gravatar.url(req.body.email);
            var student = await new studentModel({
                name: req.body.name,
                avatar: avatar,
                password: req.body.password,
                email: req.body.email,
                signature: req.body.signature,
                gender: req.body.gender
            }).save();
            // 从此绑定用户
            req.session.student = student;
            res.render('student/index', {
                success: '欢迎加入我们,开启未来新篇章'
            });
        } else {
            res.render('signup', {
                error: '两次密码不同'
            });
        }


    });


export { router as signupRouter };