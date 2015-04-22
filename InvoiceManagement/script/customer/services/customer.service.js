/**
 * Created by vishalp on 4/21/2015.
 */
angular.module('customer').factory('customerService',[function(){
    return({

        customers: new Array(),
        addCustomer : function(customerdetail){
            this.customers.push(customerdetail);
        }
    })
}]);
