var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {

  this.getUsers = function() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: 'http://reqr.es/api/users?page=1'
    }).then(function(response) {
      deferred.resolve(response.data.data);
    }, function(error) {
      deferred.reject(error)
    });

    return deferred.promise;
  };


});
