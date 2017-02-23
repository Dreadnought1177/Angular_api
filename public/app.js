'use strict';
var myApp = angular.module("myApp", ['ui.router', 'ngResource','ngStorage','ui.bootstrap','ngMessages']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        var loginPage = {
             name: 'loginPage',
             url: '/loginPage',
             templateUrl: 'public/components/app/templates/app.template',
             controller: 'RetailController',
             controllerAs:"meep"
        };
        var homePage = {
            name: 'homePage',
            url: '/homePage',
            templateUrl: 'public/components/app/templates/app.userPage.html',
            controller: 'messageController',
            controllerAs:"meep"
        };
        var startPage = {
             name: 'startPage',
             url: '/',
             templateUrl: 'public/components/app/templates/app.startPage.html',
             controller: 'RetailController',
            controllerAs:"meep"
        };
        var editUser = {
            name: 'editUser',
            url: '/editUser',
            templateUrl: 'public/components/app/templates/app.editUser.html',
            controller: 'editUserController',
            controllerAs:"meep"
        };
        var createUser = {
            name: 'createUser',
            url: '/createuser',
            templateUrl: 'public/components/app/templates/app.createUser.html',
            controller: 'RetailController',
            controllerAs:"meep"
        };
        var messageBoard = {
            name: 'messageBoard',
            url: '/messageBoard',
            templateUrl: 'public/components/app/templates/app.messageBoard.html',
            controller: 'messageController',
            controllerAs:"meep"
        };
        var editProfile = {
            name: 'editProfile',
            url: '/editProfile',
            templateUrl: 'public/components/app/templates/app.editProfile.html',
            controller: 'editUserController',
            controllerAs:"meep"
        };
        $stateProvider.state(messageBoard);
        $stateProvider.state(createUser);
        $stateProvider.state(editUser);
        $stateProvider.state(startPage);
        $stateProvider.state(loginPage);
        $stateProvider.state(homePage);
        $stateProvider.state(editProfile);
        $urlRouterProvider.otherwise('/');

}]);


myApp.factory('user_info', function(){
    var current_user = {};
    var editUser = {};
  return [current_user, editUser]
});

myApp.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
// myApp.run(function($http) {
//     $http.defaults.headers.post['X-CSRFToken'] = $.cookie('csrftoken');
// });