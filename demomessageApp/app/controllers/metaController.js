angular.module('demoApp').controller('MessageController', ['$scope', 'MessageService', 'metaService','$rootScope', function($scope, MessageService, metaService, $rootScope) {
	
	$scope.savingMessage = false;
	$rootScope.metaservice = metaService;

    $scope.getThreads =  function(){
		MessageService.getThread().then(function (data) {
			$scope.threads = data;
		});
	}

	$scope.postMessage =  function(){
		$scope.savingMessage = true;
		MessageService.postMessage($scope.msg).then(function (data) {
			$scope.threads.push(data)
			$scope.msg = {};
			$scope.savingMessage = false;
			$rootScope.metaservice.set($scope.msg.subject,$scope.msg.message);
		}, function (error) {
            // promise rejected, could log the error
            console.log('error', error);
            $scope.savingMessage = false;
        });
	}
        
  
}]);