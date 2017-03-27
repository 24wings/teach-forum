import express = require('express');
import { checkParamsFromBody } from '../middlewares/index';
var router = express.Router();



router.route('/')
    .get((req, res, next) => {
        res.locals.student = false;
        req.session.student = null;
        res.render('index');
    });



export { router as signoutRouter };