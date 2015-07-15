angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {


	$routeProvider

		.when('/', {
			templateUrl: 'app/views/pages/home.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
		.when('/login', {
			templateUrl: 'app/views/pages/login.html'
		})
		.when('/signup', {
			templateUrl: 'app/views/pages/signup.html'
		})
		.when('/all', {
			templateUrl: 'app/views/pages/all.html',
			controller: 'AllController',
			controllerAs: 'story',
			resolve: {
				stories: function(Story) {
					return Story.all();
				}
			}
		})

	$locationProvider.html5Mode(true);


});