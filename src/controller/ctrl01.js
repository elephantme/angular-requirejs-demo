define([], function(){
	return ['$scope', 'UserService', function($scope, UserService){
		$scope.user = UserService.getUserInfo();
	}];
});