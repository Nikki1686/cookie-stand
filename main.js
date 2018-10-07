'use strict'

//Constructors for stores
var createTable = document.getElementById('stores');
var Store = function (name, minCustomersperHour, maxCustomersPerHour, averageCookiesSoldPerCustomer) {
    this.name = name;
    this.min = minCustomersperHour;
    this.max = maxCustomersPerHour;
    this.avgCookiesPerSale = averageCookiesSoldPerCustomer;
    this.customersPerHour = [];
    this.cookiesSoldEachHour = [];
    this.totalCookies = 0;
    this.meatAndPotatoes();
};

//Store prototypes and calculating the data
Store.prototype.calculateCustomersPerHour = function () {
    var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.round(randomAmount * this.avgCookiesPerSale);
};

Store.prototype.calculateCookiesSoldEachHour = function () {
    for (var i = 0; i < 15; i++) {
        var cookieVar = this.calculateCustomersPerHour();
        this.cookiesSoldEachHour.push(cookieVar);
        this.totalCookies = this.totalCookies + cookieVar;
        console.log(this.totalCookies + "total cookies");
        console.log(cookieVar);
    }
}

Store.prototype.renderHours = function () {
    this.calculateCookiesSoldEachHour();
};

//creating the meat and potatoes of the table
Store.prototype.meatAndPotatoes = function () {
    this.calculateCookiesSoldEachHour();
    var total = 0;
    var createMeatAndPotatoesRows = document.createElement('tr');
    var createMeatAndPotatoesData = document.createElement('td');
    createMeatAndPotatoesData.textContent = this.name;
    createMeatAndPotatoesRows.appendChild(createMeatAndPotatoesData);
    for (var i = 0; i < 15; i++) {
        console.log('here');
        createMeatAndPotatoesData = document.createElement('td');
        createMeatAndPotatoesData.textContent = this.cookiesSoldEachHour[i];
        createMeatAndPotatoesRows.appendChild(createMeatAndPotatoesData);
        total += this.cookiesSoldEachHour[i];
        console.log(this.cookiesSoldEachHour[i] + 'yo');
    }
    createMeatAndPotatoesData = document.createElement('td');
    createMeatAndPotatoesData.textContent = total;
    createMeatAndPotatoesRows.append(createMeatAndPotatoesData);
    createTable.appendChild(createMeatAndPotatoesRows);
    console.log(this.createMeatAndPotatoesData);
    console.log(total + 'hi');
};
//creates header row
var headerRow = function () {
    var createHeader = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
    var tableRows = document.createElement('tr');
    var tableData = document.createElement('th');
    tableData.textContent = `Location`;
    tableRows.appendChild(tableData);
    for (var i = 0; i < createHeader.length; i++) {
        tableData = document.createElement('th');
        tableData.textContent = createHeader[i];
        tableRows.appendChild(tableData);
    }
    tableRows.appendChild(tableData);
    createTable.appendChild(tableRows);
}
headerRow();

//stores and constructor function
var pikePlace = new Store('First and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//call the constructor function
pikePlace.renderHours();
seaTac.renderHours();
seattleCenter.renderHours();
capitolHill.renderHours();
alki.renderHours();

//Form
//creates event related to HTML form
var makeStore = function (event) {
    event.preventDefault()
    var name = event.target.name.value;
    var minimumCustomers = parseInt(event.target["min-customer"].value);
    var maximumCustomers = parseInt(event.target["max-customer"].value);
    var averageCookies = parseFloat(event.target["avg-cookie"].value);
    console.log(name, typeof minimumCustomers, typeof maximumCustomers, typeof averageCookies);

    //creates new store 
    var newStore = new Store(name, minimumCustomers, maximumCustomers, averageCookies);
    newStore.renderHours();
    console.log(newStore);
    allStores.push(newStore);

    //adds new store to bottom of table
    createMeatAndPotatoesData.remove();
    createMeatAndPotatoesData = document.createElement("td");
    headerRow();
    pikePlace.renderHours();
    seaTac.renderHours();
    seattleCenter.renderHours();
    capitolHill.renderHours();
    alki.renderHours();
}
//adds event to html form
var form = document.getElementById("store-form");
form.addEventListener("submit", makeStore);