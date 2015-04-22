/**
 * Created by vishalp on 4/21/2015.
 */
angular.module('customer').controller('customerCntrl',['$scope','customerService',function($scope, nameService){
    $scope.addCust =function() {
        nameService.addCustomer({'name':$scope.name,'address':$scope.address});
        $scope.name = '';
        $scope.address='';
    };
    $scope.custlist=nameService.customers;
}]);
