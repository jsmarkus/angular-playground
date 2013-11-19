/*global require, angular*/
'use strict';
require('angular');
require('angular-route');

var app = angular
    .module('myApp', ['ngRoute'])
    .config(['$routeProvider',
        function($routeProvider) {
            // Specify routes to load our partials upon the given URLs
            $routeProvider.when('/', {
                templateUrl: 'src/partials/testPartial.html',
                controller: 'TestCtrl'
            });
            $routeProvider.when('/view1', {
                templateUrl: 'src/partials/partial1.html'
            });
            $routeProvider.when('/view2', {
                templateUrl: 'src/partials/partial2.html'
            });
            $routeProvider.otherwise({
                redirectTo: '/view1'
            });
        }
    ])
    .controller('TestCtrl', ['$scope',
        function($scope) {
            $scope.testWord = 'abcde';
        }
    ]);

// angular.bootstrap(document.body, ['myApp']);