/**
 * Created by vishalp on 4/22/2015.
 */
angular.module('invoice').controller('invoiceCntrl',['$scope','invoiceService','itemService',function($scope, invoiceService,itemservice){
    $scope.addInvoice =function() {
        $scope.invoiceid = $scope.invoicelst.length + 1;
        invoiceService.addInvoice(
            {invoiceid: $scope.invoiceid,
             custinvoiceid: $scope.custlist.id,
            itemlst:itemservice.itemlist
            //totalcost: $scope.totalcost
        });
        $scope.invoiceid=0;
        $scope.custinvoiceid=0;
        $scope.itemlst='';
        //$scope.totalcost=0;
        itemservice.clearlist();
    };
    $scope.invoicelst=invoiceService.invoicelist;
}]);

angular.module('invoice').controller('itemlistCntrl',['$scope','itemService',
    function($scope,itemservice)
{


   $scope.additem = function()
   {
       itemservice.additemlist({itemtitle: $scope.itemtitle,quantity: $scope.quantity,cost: $scope.cost});
       itemservice.totalcst = itemservice.totalcst + $scope.quantity*$scope.cost;
       $scope.itemtitle='';
       $scope.quantity='';
       $scope.cost='';
       $scope.totalcost = itemservice.totalcst;
   }
    $scope.totalcost = itemservice.totalcst;
   $scope.itemlst = itemservice.itemlist;
}])