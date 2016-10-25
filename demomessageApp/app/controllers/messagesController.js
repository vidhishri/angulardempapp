angular.module('demoApp').controller('MessageController', ['$scope', 'MessageService', 'metaService','$rootScope', function($scope, MessageService, metaService, $rootScope) {
	
	$scope.savingMessage = false;
	$rootScope.metaservice = metaService;
		
	/**
	* function to get the threads
	*/
    $scope.getThreads =  function(){
		MessageService.getThread().then(function (data) {
			$scope.threads = data;
		});
	}

	$scope.postMessage =  function(){
		// check to make sure the form is completely valid
		$scope.savingMessage = true;
		MessageService.postMessage($scope.msg).then(function (data) {
			$scope.threads.push(data)
			$scope.savingMessage = false;
			$rootScope.metaservice.set($scope.msg.subject,$scope.msg.message);
			$scope.msg = {};
		}, function (error) {
            // promise rejected, could log the error
            console.log('error', error);
            $scope.savingMessage = false;
        });
	}
        
  
}]);
