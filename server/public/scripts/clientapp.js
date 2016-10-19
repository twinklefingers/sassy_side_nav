console.log("hooked up");

var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/one', {
        templateUrl: "/views/partials/one.html",
        controller: ""
    }).
    when('/two', {
        templateUrl: "/views/partials/two.html",
        controller: ""
    }).
    when('/three', {
        templateUrl: "/views/partials/three.html",
        controller: ""
    }).
    when('/four', {
        templateUrl: "/views/partials/four.html",
        controller: ""
    }).
    when('/five', {
        templateUrl: "/views/partials/five.html",
        controller: ""
    }).
    otherwise({
        redirectTo: "/#"
    });
}]);
