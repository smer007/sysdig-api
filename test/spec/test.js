(function () {
  'use strict';

  describe('Test event service', function () {
    
     // load the controller's module
  beforeEach(module('sysdigApp'));

  var MainCtrl;
    var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_) {
    scope = $rootScope.$new();
    MainCtrl = _$controller_('MainCtrl', {
      $scope: scope
      
    });
  }));

  

  it('should be defined', function () {
    expect(scope.events).toBeDefined();
  });
    
  });
})();
