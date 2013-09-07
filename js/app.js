// JavaScript Document
//sample 1
var person = {
    firstName: "Christophe",
    lastName: "Coenraets",
    blogURL: "http://coenraets.org"
};
var template = "<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}";
var html = Mustache.to_html(template, person);
$('#sampleArea').html(html);

//sample 2
$.getJSON('json/data.json', function(data) {
    var template2 = "<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}";
    var html2 = Mustache.to_html(template2, data);
    $('#sampleArea2').html(html2);
});

//sample 3
$.getJSON('json/data.json', function(data) {
    var template = $('#personTpl').html();
    var html3 = Mustache.to_html(template, data);
    $('#sampleArea3').html(html3);
});

//sample 4
var data4 = {name: "John Smith", skills: ['JavaScript', 'PHP', 'Java']};
var tpl = "{{name}} skills:<ul>{{#skills}}<li>{{.}}</li>{{/skills}}</ul>";
var html4 = Mustache.to_html(tpl, data4);
$('#sampleArea4').html(html4);

//sample 5

var data5 = {
    employees: [
    {   firstName: "Christophe",
        lastName: "Coenraets"},
    {   firstName: "John",
        lastName: "Smith"}
    ]};
var template5 = "Employees:<ul>{{#employees}}" +
                            "<li>{{firstName}} {{lastName}}</li>" +
                            "{{/employees}}</ul>";
var html5 = Mustache.to_html(template5, data5);
$('#sampleArea5').html(html5);

//sample 6
var person6 = {
    firstName: "Christophe",
    lastName: "Coenraets",
    blogURL: "http://coenraets.org",
    manager : {
        firstName: "John",
        lastName: "Smith"
    }
};
var template6 = "<h1>{{firstName}} {{lastName}}</h1><p>{{blogURL}}</p>" +
               "Manager: {{manager.firstName}} {{manager.lastName}}";
var html6 = Mustache.to_html(template6, person6);
$('#sampleArea6').html(html6);

//sample 7
var person7 = {
    firstName: "John",
    lastName: "Smith",
    blogURL: "http://johnsmith.com",
    manager : {
        firstName: "Lisa",
        lastName: "Jones"
    }
};
var tpl7 = "<h1>{{firstName}} {{lastName}}</h1><p>{{blogURL}}</p>" +
          "{{#manager}}Manager: {{firstName}} {{lastName}}{{/manager}}";
var html7 = Mustache.to_html(tpl7, person7);
$('#sampleArea7').html(html7);

//sample 8
var product = {
    name: "FooBar",
    price: 100,
    salesTax: 0.05,
    totalPrice: function() {
        return this.price + this.price * this.salesTax;
    }
};
var template8 = "<p>Product Name: {{name}}</p>Price: {{totalPrice}}";
var html8 = Mustache.to_html(template8, product);
$('#sampleArea8').html(html8);


//sample 9
var data9 = {
    employees: [
    {   firstName: "Christophe",
        lastName: "Coenraets",
        fullTime: true,
        phone: "617-123-4567"
    },
    {   firstName: "John",
        lastName: "Smith",
        fullTime: false,
        phone: "617-987-6543"
    },
    {   firstName: "Lisa",
        lastName: "Jones",
        fullTime: true,
        phone: "617-111-2323"
    },
    ]};
var tpl9 = "Employees:<ul>{{#employees}}<li>{{firstName}} {{lastName}}" +
          "{{#fullTime}} {{phone}}{{/fullTime}}</li>{{/employees}}</ul>";
var html9 = Mustache.to_html(tpl9, data9);
$('#sampleArea9').html(html9);

//sample 10
var data10 = {
    firstName: "Christophe",
    lastName: "Coenraets",
    address: "1 Main street",
    city: "Boston",
    state: "MA",
    zip: "02106"
};
 
var template10 = "<h1>{{firstName}} {{lastName}}</h1>{{>address}}";
var partials10 = {address: "<p>{{address}}</p>{{city}}, {{state}} {{zip}}"};
var html10 = Mustache.to_html(template10, data10, partials10);
$('#sampleArea10').html(html10);

//sample 11
var data11 = { depts: [
    {   name: "Engineering",
        employees: [
            {firstName: "Christophe", lastName: "Coenraets"},
            {firstName: "John", lastName: "Smith"}]
    },
    {   name: "Sales",
        employees: [
            {firstName: "Paula", lastName: "Taylor"},
            {firstName: "Lisa", lastName: "Jones"}]
    }]
};
 
var tpl11 = "{{#depts}}<h1>{{name}}</h1>" +
          "<ul>{{#employees}}{{>employee}}{{/employees}}</ul>{{/depts}}";
var partials11 = {employee: "<li>{{firstName}} {{lastName}}</li>"};
var html11 = Mustache.to_html(tpl11, data11, partials11);
$('#sampleArea11').html(html11);