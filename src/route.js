define(['app'], function(app){
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/view1', {
			templateUrl: 'template/view1.html',
			controller: 'Ctrl01'
		});

		$routeProvider.when('/view2', {
			templateUrl: 'template/view2.html',
			controller: 'Ctrl02'
		});
		
	}]);
});