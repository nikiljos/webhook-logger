const router = require('express').Router();
const controllers=require('./controllers.js')

router.get('/',controllers.get)

router.post('/',controllers.post)


module.exports=router