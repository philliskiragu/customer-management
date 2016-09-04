/**
 * Created by PKiragu on 30/08/16.
 */
var app = angular.module('custApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider

        .state('dash', {
            url: '',
            abstract: true,
            templateUrl: '/dashboard.html'
        })
        .state('dashboard',{
            url: '/dashboard',
            templateUrl: 'app/dashboard.html'
        })
        .state('auth', {
            url: '/auth',
            //controller: 'authCtrl as auth1',
            views: {
                //main auth template
                '': {
                    templateUrl: 'app/auth/auth.html'
                },

                //login template
                'login@auth': {
                    templateUrl: 'app/auth/login.html'
                },

                //signup template
                'signup@auth': {
                    templateUrl: 'app/auth/signup.html'
                }
            }
        });

});