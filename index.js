const path = require('path');
const bodyParser = require('body-parser')
const dateFormat = require('dateformat');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

var services = JSON.parse(process.env.VCAP_SERVICES);
var mongoUri = services['mlab'][0].credentials.uri;
var mongoUriArr = mongoUri.split('/');
var dbName = mongoUriArr[mongoUriArr.length-1];
var collectionName = 'visas';

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	next();
});
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 3000, () => console.log('Visa app listening on port ' + process.env.PORT));

app.get('/',function(req,res,next){
	res.sendFile(path.join(__dirname+'/public/form.html'));
});

app.post('/visa', function(req,res,next){
	var now = new Date();
	var resJSON = {};
	resJSON.submitDate = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
	resJSON.name = req.body.name;
	resJSON.email = req.body.email;
	resJSON.country = req.body.country;
	resJSON.visaType = req.body.visaType;
	
	updateDashboardJSON(resJSON);
	
	res.json(resJSON);
});

app.get('/dashboardData', function(req,res,next){
	req.socket.setTimeout(10000000);
    res.writeHead(200, {
    	'Content-Type': 'text/event-stream',  // <- Important headers
    	'Cache-Control': 'no-cache',
    	'Connection': 'keep-alive'
    });
	setInterval(function() {
		getDashboardJSON(function (doc) {
			res.write("data: " + JSON.stringify(doc) + "\n\n");
		});
	}, 1000);
	req.on("close", function(){delete res});
});

app.get('/dashboard', function(req,res,next){
	res.sendFile(path.join(__dirname+'/public/dashboard.html'));
});

app.get('/health', function(req,res,next){
	res.sendStatus(200);
});

const getDashboardJSON = function (callback) {
	MongoClient.connect(mongoUri, function(err, client) {
		if (err) console.log(err);
		var db = client.db(dbName);
		var collection = db.collection(collectionName);
		collection.find({}).toArray(function(err, docs) {
			if (err) {
				console.log("Error occured while fetching documents");
				console.log(err);
				client.close();
			} else {
				callback(docs[0]);
			}
		});
		client.close();
	});
};

const updateDashboardJSON = function (newJSON) {
	MongoClient.connect(mongoUri, function(err, client) {
		if (err) console.log(err);
		var db = client.db(dbName);
		var collection = db.collection(collectionName);

		getDashboardJSON( function (doc) {
			var currentJSON = {};
			var dashboardJSON = {};
			currentJSON = doc;
			delete currentJSON["_id"];
			console.log("Current dashboardJSON value is: " + JSON.stringify(currentJSON));

			dashboardJSON = JSON.parse(JSON.stringify(currentJSON));
			dashboardJSON.name = newJSON.name;
			dashboardJSON.email = newJSON.email;
			for (var i = 0; i < currentJSON.countries.length; i++) {
				var country = currentJSON.countries[i];
				if (country.name == newJSON.country)
					dashboardJSON.countries[i].items[0]++;
			}

			collection.deleteOne(currentJSON, function(err, result) {
				if (err) {
					console.log("Error occured while deleting document");
					console.log(err);
					client.close();
				} else {
					console.log("Removed old dashboardJSON: " + JSON.stringify(currentJSON));
					collection.insertOne(dashboardJSON, function(err, result) {
						if (err) {
							console.log("Error occured while inserting new dashboardJSON");
							console.log(err);
							client.close();
						} else {
							console.log("Inserted " + result.result.n + " or " + result.ops.length + " documents into the collection");
							console.log("Inserted JSON: " + JSON.stringify(dashboardJSON));
							client.close();
						}
					});
				}
			});
		});
	});
};
