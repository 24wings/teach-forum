import express = require('express');
import moment = require('moment');

import { topicModel, ITopic } from '../models';

var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  var selectedTable = req.query.tab ? req.query.tab : '全部';
  console.log(selectedTable);
  var articles = [];
  if (selectedTable == '全部' || !selectedTable) {
    articles = await topicModel.find().exec();
  } else {
    articles = await topicModel.find({ tab: selectedTable }).exec();
  }



  res.render('index', {
    selectedTable,
    articles,
    moment
  });
});

export { router as indexRouter };
export { signinRouter } from './signin';
export { signupRouter } from './signup';
export { studentIndexRouter } from './student/index';
export { signoutRouter } from './signout';
export { createRouter } from './create';
export { topicRouter } from './topic';

