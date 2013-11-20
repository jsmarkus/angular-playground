/*global require, angular*/
'use strict';
require('angular');
require('angular-route');
require('angular-sanitize');

var app = angular
    .module('myApp', ['ngRoute', 'ngSanitize'])
    .config(['$routeProvider',
        function($routeProvider) {
            // Specify routes to load our partials upon the given URLs
            $routeProvider.when('/books', {
                templateUrl: 'src/partials/booksView.html',
                controller: 'BooksCtrl'
            });
            $routeProvider.when('/book/:id', {
                templateUrl: 'src/partials/bookView.html',
                controller: 'BookCtrl'
            });
            $routeProvider.otherwise({
                redirectTo: '/books'
            });
        }
    ])
    .directive('brFiction', require('./dirFb2'))
    .controller('BooksCtrl', require('./BooksCtrl'))
    .controller('BookCtrl', require('./BookCtrl'))
    ;

// angular.bootstrap(document.body, ['myApp']);