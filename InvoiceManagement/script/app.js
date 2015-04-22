/**
 * Created by vishalp on 4/21/2015.
 */
var app = angular.module('InvoiceApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/invoicelist"); // By default route to state1

    $stateProvider
        .state('invoicelist', {
            url: "invoicelist",
            templateUrl: "partials/invoicelist.html"
        })
        .state('addcustomer', {
            url: "addcustomer",
            templateUrl: "partials/addcustomer.html"
        })
        .state('addinvoice', {
            url: "addinvoice",
            templateUrl: "partials/addinvoice.html"
        })
});