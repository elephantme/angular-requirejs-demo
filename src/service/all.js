define(
	['angular', './bookService', './userService'], 
	function(angular, bookService, userService){
		var all = angular.module('app.services', []);

		all.service({
			'BookService': bookService,
			'UserService': userService
		});
		
	}
)