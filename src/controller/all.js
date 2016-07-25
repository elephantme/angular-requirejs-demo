define([
	'angular',
	'./ctrl01',
	'./ctrl02'
], function(
	angular,
	ctrl01, 
	ctrl02
){
	var all = angular.module('app.controllers', []);

	all.controller({
		'Ctrl01': ctrl01,
		'Ctrl02': ctrl02
	});
	
});