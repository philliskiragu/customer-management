/**
 * Created by PKiragu on 04/09/16.
 */
var app = angular.module('custApp');

app.factory('customers', function () {
    var customers = {};
    customers.list = [{id: '1', 'firstName': 'phillis', 'lastName': 'Kiragu', 'email': 'pkiragu@cytonn.com',
        'orders': [{id: '1', 'item': 'shoes' , 'quantity': '3','price': '1000', 'description': 'heels'},
            {id: '2', 'item': 'dress' , 'quantity': '1', 'price': '1000', 'description': 'red'}]},
        {id: '2', 'firstName': 'John', 'lastName': 'Maina', 'email': 'jm@cytonn.com',
            'orders':  [{id: '1', 'item': 'shoes' , 'quantity': '3','price': '1000', 'description': 'heels'},
                {id: '2', 'item': 'dress' , 'quantity': '1','price': '1000', 'description': 'red'}]},
        {id: '3', 'firstName': 'James', 'lastName': 'Otieno', 'email': 'jo@cytonn.com',
            'orders': [{id: '1', 'item': 'shoes' , 'quantity': '3','price': '1000', 'description': 'heels'},
                {id: '2', 'item': 'dress' , 'quantity': '1','price': '1000', 'description': 'red'}]},
        {id: '4', 'firstName': 'June', 'lastName': 'kamau', 'email': 'jk@cytonn.com',
            'orders': [{id: '1', 'item': 'shoes' , 'quantity': '3','price': '1000', 'description': 'heels'},
                {id: '2', 'item': 'dress' , 'quantity': '1','price': '1000', 'description': 'red'}]},
        {id: '5', 'firstName': 'Jeremy', 'lastName': 'Smith', 'email': 'js@cytonn.com',
            'orders': [{id: '1', 'item': 'shoes' , 'quantity': '3','price': '1000', 'description': 'heels'},
                {id: '2', 'item': 'dress' , 'quantity': '1','price': '1000', 'description': 'red'}]}];

    customers.add = function (customer) {
        customers.list.push({
            id: customers.list.length + 1, firstName: customer.firstName, lastName: customer.lastName,
            email: customer.email, orders: []
        });
    };

    customers.delete = function (customer) {
        _index = customers.list.indexOf(customer);
        customers.list.splice(_index, 1);
    };

    return customers;
});

app.controller('displayCustomerCtrl', ['customers', '$state', function (customers, $state) {
    var self = this;
    self.customers = customers.list;
    self.customer = {};

    self.deleteCustomer = function (customer) {
        if (confirm("Are you sure you want to delete this customer?") === true){
            customers.delete(customer);
        }
    };
}]);

app.controller('addCustomerCtrl', function (customers, $state ) {
    var self = this;

    self.addCustomer = function (customer) {
        customers.add(customer);
        self.newCustomer = '';
        alert('Customer added successfully');
        $state.go('dashboard')
    };
});

app.controller('editCustomerCtrl', ['customers', '$stateParams', '$state', function (customers, $stateParams, $state) {
    var self = this;
    customer = null;

    var id = $stateParams.id;

    for (var i in customers.list) {
        if (customers.list[i]["id"] === id) {
            self.customerDetails = customers.list[i];

            customer = self.customerDetails;
        }
    }

    self.id = self.customerDetails['id'];
    self.firstname = self.customerDetails['firstName'];
    self.lastname = self.customerDetails['lastName'];
    self.email = self.customerDetails['email'];

    self.editCustomer = function (customer) {
        customer.firstName = self.firstname;
        customer.lastName = self.lastname;
        customer.email = self.email;
        alert("Customer updated successfully");
        $state.go('dashboard')
    }
}]);

app.controller('addCustomerOrderCtrl', ['customers', '$stateParams', '$state', function (customers, $stateParams, $state) {
    var self = this;
    customer = null;

    var id = $stateParams.id;
    for (var i = 0; i < customers.list.length; i++) {
        if (customers.list[i]["id"] === id) {
            self.customerDetails = customers.list[i];

            customer = self.customerDetails;
        }
    }

    self.addCustomerOrder = function (customer) {
        customer.orders.push({
            id: customer.orders.length + 1, item: self.item, quantity: self.quantity,
            price: self.price, description: self.description
        });
        alert("Order added successfully");
        $state.go('dashboard')
    }
}]);
