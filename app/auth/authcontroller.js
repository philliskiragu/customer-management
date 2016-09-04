/**
 * Created by PKiragu on 04/09/16.
 */
var app = angular.module('custApp');

app.constant('API', 'http://test-routes.herokuapp.com');

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('jwtInterceptor');
});

app.factory('jwtInterceptor', function ($window) {
    return {
        request: function (config) {
            var token = $window.localStorage.getItem('token');

            config.headers.Authorization = 'Bearer ' + token;

            return config;

        }

    };
});

app.factory('auth', function ($http, API, $window) {
    var auth = {};

    auth.register = function (username, password) {
        $http.post(API + '/auth/register', {username: username, password: password})
            .then(function (response) {
                alert('user registered');
                console.log("register: ", response);
            }, function (response) {
                console.log(response.data);
                //alert('an error occurred');
            });
    };

    auth.getToken = function () {
        return $window.localStorage.getItem('token');
    };

    auth.login = function (username, password) {
        $http.post(API + '/auth/login', {username: username, password: password})
            .then(function (response) {
                console.log("login response: ", response);
                $window.localStorage.setItem('token', response.data.token);
                console.log("token: ", token);

            }, function (response) {
                alert('login failed!');
            });
    };

    auth.logout = function () {
        $window.localStorage.removeItem('token');
    };

    return auth;
});

app.controller('authCtrl', function ($scope, auth, API, $http) {

    $scope.login = function () {
        auth.login($scope.username, $scope.password);
    };

    $scope.register = function () {
        console.log($scope.username);
        auth.register($scope.username, $scope.password);

    };
    $scope.logout = function () {
        auth.logout();
    };

    $scope.getQuote = function () {
        $http.get(API + '/auth/quote')
            .then(function (response) {
                $scope.quote = response.data.message;
            }, function () {

            });
    }

});