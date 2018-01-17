let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {


	callback(null, 'Successfully executed');
	console.log("successfully triggered ");

	sns.publish({
		Message: 'MESSAGE BODY',
		Subject: 'MSG SUB',
		MessageAttributes: {},
		MessageStructure: 'String',
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:upulie_topic_jan17'
	}).promise()
		.then(data => {
			// your code goes here

			console.log("Successfully Published" ,data );
		})
		.catch(err => {
			// error handling goes here

			console.log("Error encountered" ,err );
		});




}