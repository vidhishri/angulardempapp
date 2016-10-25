/**
* Application is developed to provide frontend display for demoangular
* @author: Daffodil Software ltd<www.daffodilsw.org>
*/

// Require some dependencies
require('angular');
require('angular-animate');
require('angular-ui-bootstrap');
require('angular-route');

/**@Funciton: config
  *@Description: function will set route and call the service function to get data
  */
var config = function($routeProvider) {
  $routeProvider.
    when('/', {
        templateUrl: 'templates/messages.html',
        controller: 'MessageController'
    }).
    otherwise('/', {
        templateUrl: 'templates/messages.html',
        controller: 'MessageController'
    });
};

//set up app
angular.module('demoApp', ['ngAnimate', 'ui.bootstrap', 'ngRoute'])
.config(config) // set config
.constant('BASE_URL', { apiServer: "http://localhost:8000/api" } );// constant for server api url

// Require some dependencies
require('./controllers/messagesController.js');
require('./services/messageService.js');
require('./services/metaService.js');


