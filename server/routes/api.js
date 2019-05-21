var express = require('express');
var router = express.Router();

var moment = require('moment');

// firebase realtime database
var admin = require('firebase-admin');
var serviceAccount = require('../firebase/service_account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://express-vue-cli-pro.firebaseio.com/" //database的URL
});

var db = admin.database();

router.get('/daily/:date([0-9]+)', function(req, res, next) {
	var ref = db.ref(`sports_schedule/${req.params.date}`);

	// 这里不用once的话会引发错误：Cannot set headers after they are sent to the client
	ref.once("value", function(snapshot) {
	    res.json(snapshot.val());
	}, 
	function(errorObject) {
	    console.log("The read failed: " + errorObject.code);
	});
});

router.post('/update', function(req, res, next) {
	var ref = db.ref(`sports_schedule/${req.body.date}`);

	var method = req.body.method;
	ref.once("value", function(snapshot) {
		if (method === 'add' && snapshot.val() === null) {
			ref.set(true);
		} else if (method === 'remove' && snapshot.val() !== null) {
			ref.remove();
		}
		res.json({'msg': 'done'});
	}, 
	function(errorObject) {
	    console.log("The add or remove failed: " + errorObject.code);
	});
});

router.get('/report', function(req, res, next) {
	var ref = db.ref(`sports_schedule`);

	var createDateString = function (time) {
		return moment(time).format('YYYYMMDD');
	}

	var now = Date.now();
	var aWeekAgo = createDateString(now - 3600 * 24 * 1000 * 7);
	var twoWeeksAgo = createDateString(now - 3600 * 24 * 1000 * 14);
	var aMonthAgo = createDateString(now - 3600 * 24 * 1000 * 30);
	var twoMonthsAgo = createDateString(now - 3600 * 24 * 1000 * 60);

	var latestSevenDaysCount = 0;
	var previousSevenDaysCount = 0;
	var latestThirtyDaysCount = 0;
	var previousThirtyDaysCount = 0;

	ref.once("value", function(snapshot) {
		var dates = Object.keys(snapshot.val());
		dates.forEach(function (date) {
			if (parseInt(date) > parseInt(aWeekAgo)) latestSevenDaysCount++;
			else if (parseInt(date) > twoWeeksAgo) previousSevenDaysCount++;
			if (parseInt(date) > parseInt(aMonthAgo)) latestThirtyDaysCount++;
			else if (parseInt(date) > twoMonthsAgo) previousThirtyDaysCount++;
		});
		res.json({
			latestSevenDaysCount,
			previousSevenDaysCount,
			latestThirtyDaysCount,
			previousThirtyDaysCount
		});
	}, 
	function(errorObject) {
	    console.log("The read failed: " + errorObject.code);
	});
});

module.exports = router;
