/**
 * Created by PKiragu on 04/09/16.
 */
var app = angular.module('custApp');

app.factory('customers', function () {
    var customers = {};
    customers.list = [
        {id: '0', 'firstName': 'phillis', 'lastName': 'Kiragu', 'email': 'pkiragu@cytonn.com', 'order': 'order1'},
        {id: '1', 'firstName': 'phillis', 'lastName': 'Kiragu', 'email': 'pkiragu@cytonn.com', 'order': 'order1'},
        {id: '2', 'firstName': 'phillis', 'lastName': 'Kiragu', 'email': 'pkiragu@cytonn.com', 'order': 'order1'},
        {id: '3', 'firstName': 'phillis', 'lastName': 'Kiragu', 'email': 'pkiragu@cytonn.com', 'order': 'order1'},
        {id: '4', 'firstName': 'phillis', 'lastName': 'Kiragu', 'email': 'pkiragu@cytonn.com', 'order': 'order1'}
    ];

    customers.add = function (customer) {
        customers.list.push({
            id: customers.list.length, firstName: customer.firstName, lastName: customer.lastName,
            email: customer.email, order: customer.order
        });
    };

    //customers.edit = function (customer) {
    //    customers
    //}

    return customers;
});

app.controller('displayCustomerCtrl', function (customers) {
    var self = this;
    self.customers = customers.list;
    self.customer = {};

    self.editCustomer = function(customer){
        self.customer = customer;

        console.log("clicked customer: ", self.customer);
    }

    console.log("clicked: ", self.customer);

});

app.controller('addCustomerCtrl', function (customers) {
    var self = this;

    self.addCustomer = function (customer) {
        customers.add(customer);
        self.newCustomer = '';
    };
});

app.controller('viewCustomerCtrl', function (customers){
    var self = this;


});

//app.filter('allCustomersCtrl', function () {
//    return function (items, letter) {
//        console.log("letter", String(letter));
//        var filtered_customers = []; // an empty array of names
//        for (var i = 0; i <= items.length; i++) {
//            if (items[i].startsWith(letter)) {
//                filtered_customers.push(items[i]);
//                console.log("items: ", items[i]);
//            }
//        }
//        return filtered_customers;
//    };
//});
