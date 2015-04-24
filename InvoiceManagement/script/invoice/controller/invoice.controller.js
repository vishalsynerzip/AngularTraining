/**
 * Created by vishalp on 4/22/2015.
 */
angular.module('invoice').controller('invoiceCntrl',['$scope','invoiceService','itemService','customerService',function($scope, invoiceService,itemservice,custservice){
    $scope.addInvoice =function() {
        $scope.invoiceid = $scope.invoicelst.length + 1;
        var custid = $scope.selectedcust;
        invoiceService.addInvoice(
            {invoiceid: $scope.invoiceid,
             custinvoiceid: $scope.selectedcust,
            itemlst:itemservice.itemlist,
            totalcost: $scope.totalcost
        });
        $scope.invoiceid=0;
        $scope.custinvoiceid=0;
        $scope.itemlst='';
        $scope.selectedcust='';
        $scope.totalcost=0;
        itemservice.clearlist();
        $scope.invoicelst=invoiceService.invoicelist;
    };
    $scope.additem = function()
    {
        itemservice.additemlist({itemtitle: $scope.itemtitle,quantity: $scope.quantity,cost: $scope.cost});
        itemservice.totalcst = itemservice.totalcst + $scope.quantity*$scope.cost;
        $scope.itemtitle='';
        $scope.quantity='';
        $scope.cost='';
        $scope.totalcost = itemservice.totalcst;
        $scope.itemlst = itemservice.itemlist;
    }
    $scope.itemlst = itemservice.itemlist;
    $scope.custlist = custservice.customers;
    $scope.invoicelst=invoiceService.invoicelist;
}]);

