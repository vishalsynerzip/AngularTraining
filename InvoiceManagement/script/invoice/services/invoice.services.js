/**
 * Created by vishalp on 4/22/2015.
 */
angular.module('invoice').factory('invoiceService',[function(){
    return({
        invoicelist : new Array(),
        addInvoice : function(invoicedetail){
            this.invoicelist.push(invoicedetail);
        }
    })
}]);

angular.module('invoice').factory('itemService',[function(){
    return({
        itemlist : new Array(),
        totalcst:0,
        additemlist : function(itemdetails){
            this.itemlist.push(itemdetails);
        },
        clearlist : function(){
            this.itemlist=[];
            this.totalcst=0;
        }
    })
}]);