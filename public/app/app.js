angular.module('MyApp', ['mainCtrl', 'userCtrl', 'reverseDirective', 'storyCtrl', 'authService', 'appRoutes'])

.config(function($httpProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');
})