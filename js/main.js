/**
* realtimeClassApp Module
*
* Description
*/
var realtimeClassApp = angular.module('realtimeClassApp',['ngRoute','questionListControllers']);

realtimeClassApp.config(function($routeProvider) {
    $routeProvider.when('/signUp', {
        templateUrl: 'signUp.html',
        controller: 'signInController'
    }).when('/questionList', {
        templateUrl: 'templates/questionList.html',
        controller: 'questionListController'
    }).when('/signIn', {
        templateUrl: 'signIn.html',
        controller: 'signInController'
    }).when('/oneQuestion', {
        templateUrl: 'templates/oneQuestion.html',
        controller: 'oneQuestionController'
    }).when('/studentHome', {
        templateUrl: 'templates/studentHome.html',
        controller: 'studentHomeController'
    }).when('/studentHome_2', {
        templateUrl: 'templates/studentHome_2.html',
        controller: 'studentHomeController'
    }).when('/teacherHome', {
        templateUrl: 'templates/teacherHome.html',
        controller: 'teacherHomeController'
    }).when('/teacherHome_2', {
        templateUrl: 'templates/teacherHome_2.html',
        controller: 'teacherHomeController'
    }).when('/studentStatistics', {
        templateUrl: 'templates/studentStatistics.html',
        controller: 'studentHomeController'
    }).when('/assignHomework', {
        templateUrl: 'templates/assignHomework.html',
        controller: 'assignHomeworkController'
    })
});


