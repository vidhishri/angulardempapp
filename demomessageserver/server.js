/**
* Application is developed to provide server support for demoangular
* @author: Daffodil Software ltd<www.daffodilsw.org>
*/

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var config = require('./libs/config');
var cors = require('cors');

//--init server---
var sConf = config.conf_server;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

var demoMsgObj = [];
var demoThreadArr = [{ subject: 'Demo subject1', id: 1},{ subject: 'Demo subject2', id: 2}];
var demoThreadObj = { subject: 'Demo subject' + demoThreadArr.length +1, id: demoThreadArr.length +1};
// roeut to get message thread
router.get('/threads', function(req, res) {
  res.json(demoThreadArr);   

});
// roeut to post message data
router.post('/message', function(req, res) {
   //create thread object
   var temp = {}
   temp.subject = req.body.subject;
   temp.id = demoThreadArr.length +1;
   // update thread array
   demoThreadArr.push(temp)
   //create msg object
   var tempMsg =  {};
   tempMsg.id = demoMsgObj.length +1;
   tempMsg.threadId =  temp.id;
   tempMsg.content = req.body.message;
   // update message array
   demoMsgObj.push(tempMsg);
   res.json(temp);   
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(sConf.port, sConf.host);
console.log('server is running on ' + sConf.host + ":" + sConf.port);

