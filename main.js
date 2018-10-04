'use strict'

//Constructors for stores

var Store = function(name, minCustomersperHour, maxCustomersPerHour, averageCookiesSoldPerCustomer){
    this.name = name;
    this.min = minCustomersperHour;
    this.max = maxCustomersPerHour;
    this.avgCookiesPerSale = averageCookiesSoldPerCustomer;
    this.customersPerHour = [];
    this.cookiesSoldEachHour = [];
    this.totalCookies = 0;
};
//stores and constructor function
var pikePlace = new Store('First and Pike', 23, 65, 6.3);
console.log(pikePlace);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//var newArray = [pikePlace, seaTac, seattleCenter, capitolHill, alki];
var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM','11AM','12AM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM']
//Store prototypes
Store.prototype.calculateCustomersPerHour = function() {
    var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.round(randomAmount * this.avgCookiesPerSale);
};

Store.prototype.calculateCookiesSoldEachHour = function(){
  for(var i = 0; i < 15; i++){
      var cookieVar = this.calculateCustomersPerHour();
    this.cookiesSoldEachHour.push(cookieVar);
    this.totalCookies = this.totalCookies + cookieVar;
  }
}

Store.prototype.renderHours = function(){
  this.calculateCookiesSoldEachHour();

var createTable = document.getElementById('stores');
var tableRows = document.createElement('tr');
var tableData = document.createElement('th');
tableData.textContent = this.name;
tableRows.appendChild(tableData);

for (var i = 0; i < this.cookiesSoldEachHour.length; i++){
tableData = document.createElement('td');
tableData.textContent = this.cookiesSoldEachHour[i];
tableRows.appendChild(tableData);
}
tableData = document.createElement('td');
    tableData.textContent = `Total: ${this.totalCookies}`;
    tableRows.appendChild(tableData);

    createTable.appendChild(tableRows);
};



pikePlace.renderHours();
seaTac.renderHours();
seattleCenter.renderHours();
capitolHill.renderHours();
alki.renderHours();