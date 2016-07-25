define([], function(){
	return ['$scope', 'BookService', function($scope, BookService){
		$scope.list = BookService.getAll();
	}];
});