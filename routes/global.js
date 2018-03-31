const express = require('express');
const app = express();
const mongoose = require('mongoose');

const User = require('../models/Users');

app.get('/', (req, res) => {
	res.render("global/landing");
});
app.get('/medicines', (req, res) => {
	res.render('global/medicines');
});
app.get('/dietsNsupplements', (req, res) => {
	res.render('global/dietsNsupplements');
});
app.get('/bodycare', (req, res) => {
	res.render('global/bodycare');
});
app.get('/healthNfitness', (req, res) => {
	res.render('global/healthNfitness');
});
app.get('/yogatrainer', (req, res) => {
	res.render('global/yogatrainer');
});
app.get('/personaltrainer', (req, res) => {
	res.render('global/personaltrainer');
});
app.get('/homemasseur', (req, res) => {
	res.render('global/homemasseur');
});
app.get('/hometesting', (req, res) => {
	res.render('global/hometesting');
});
app.get('/ambulance', (req, res) => {
	res.render('global/ambulance');
});
app.get('/nearbyhospitals', (req, res) => {
	res.render('global/nearbyhospitals');
});
app.get('/blog', (req, res) => {
	res.render('global/blog');
});
app.get('/testimonials', (req, res) => {
	res.render('global/testimonials');
});
app.get('/contactus', (req, res) => {
	res.render('global/contactus');
});
app.get('/about', (req, res) => {
	res.render('global/about');
});
app.get('/login', (req, res) => {
	res.render('global/login');
});
app.get('/signup', (req, res) => {
	res.render('global/signup');
});
app.post('/signup', (req, res) => {
	// res.json(req.body);
	let user = new User();
	user.firstName = req.body.firstName;
	user.lastName = req.body.lastName;
	user.email = req.body.email;
	user.password = req.body.password;
	user.location = req.body.location;
	User.findOne({ email: req.body.email }, (err, existingUser) => {
		if (existingUser) {
			console.log("email exists");
		} else {
			user.save();
		}
	});

});
module.exports = app;