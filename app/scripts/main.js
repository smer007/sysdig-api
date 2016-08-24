angular
  .module('sysdigApp', [])
  .directive('sysEvents', function() {
	  return {
	    restrict: 'AE',
	    transclude: true,
	    scope: {},
	    controller: ['$scope', 'eventsService', '$interval', function MainCtrl($scope, eventsService, $interval) {
	      var mainVm = $scope;
	     
	     

	     mainVm.callEvents = function () {
	     	eventsService.getEvents().then(function (result) {
		  	mainVm.events = result.events;

		  
			}, function (error) {
			  console.log('err', error.status);
			}); 
	     };
	     mainVm.callEvents();//calling event the first time

	     //calling event every 30 seconds
	     $interval(function () {
	     	eventsService.getEvents().then(function (result) {
		  	mainVm.events = result.events;
		  		
		  
			}, function (error) {
			  console.log('err', error.status);
			}).then(function (result) {
				
			}, function (error) {
				// body...
			});  
	     }, 30000);

	      
	    }],
	    templateUrl: '../views/main.html'
	  };
	})
  .service('eventsService', eventsService);

	eventsService.$inject = ['$http', '$q'];

	function eventsService($http, $q) {
		var self = this;

		self.getEvents = function () {
			
			var defer = $q.defer();

			$http.defaults.headers.common.Authorization = 'Bearer 8aef9517-3070-4090-b55e-83296cee8cd1';
			$http
				.get('https://app-staging.sysdigcloud.com/api/events')
				.then(function (response) {
					defer.resolve(response.data);//proimse made is successfull
				}, function (error) {
					defer.reject(error.status);//proimse made is unsuccessfull
				});

				return defer.promise;
		};
	}
