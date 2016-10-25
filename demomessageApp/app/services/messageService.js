angular.module('demoApp').factory('MessageService', function (BASE_URL, $http) { 
  return { 
      getThread : function(){
        var data = {};
        return $http.get(BASE_URL.apiServer + '/threads')
        .then(function (response) {
          return response.data;
        },function(response) {
        // something went wrong
        console.log('ERROR: something went wrong')
        return data
      });
    },
    postMessage : function(data){
        return $http.post(BASE_URL.apiServer + '/message', data)
        .then(function (response) {
          return response.data;
        },function(response) {
        // something went wrong
        console.log('ERROR: something went wrong')
        return data
      });
    }
  }
})

