define([
	'angular',
	'angular-route',
	'controller/all',
	'service/all'
], function(
	angular
){
	var app = angular.module('elephant', [
		'app.controllers',
		'app.services',
		'ngRoute'
	]);

	return app;
});