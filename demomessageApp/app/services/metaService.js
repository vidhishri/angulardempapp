angular.module('demoApp').factory('metaService', function (BASE_URL, $http) { 
  var title = 'Web App';
  var metaDescription = '';
  var metaKeywords = '';
  return { 
    set: function(newTitle, newMetaDescription, newKeywords) {
      console.log('newMetaDescription',newMetaDescription)
        metaKeywords = newKeywords;
        metaDescription = newMetaDescription;
        title = newTitle; 
    },
    metaTitle: function(){ return title; },
    metaDescription: function() { return metaDescription; },
    metaKeywords: function() { return metaKeywords; }
   
  }
})

