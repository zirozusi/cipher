var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'zirozusi@gmail.com',
		pass: 'aisiokuosa'
	}
});

var mailOptions = {
	from: 'zirozusi@gmail.com',
	to: 'idirobun@gmail.com',
	subject: 'Sending Email using Node.js',
	text: 'Test test testing...'
};

transporter.sendMail(mailOptions, function(error, info){
	if (error){
	console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});