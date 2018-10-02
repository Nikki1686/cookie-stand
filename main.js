'use strict'
//Constructors for stores

var Store = function(name, minCustomersperHour, maxCustomersPerHour, averageCookiesSoldPerCustomer){
    this.name = name;
    this.min = minCustomersperHour;
    this.max = maxCustomersPerHour;
    this.avgCookiesPerSale = averageCookiesSoldPerCustomer;
    this.customersPerHour = [];
    this.cookiesSoldEachHour = [];
};
//stores and constructor function
var pikePlace = new Store('First and Pike', 23, 65, 6.3);
console.log(pikePlace);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//Store prototypes
Store.prototype.calculateCustomersPerHour = function() {
    var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.round(randomAmount * this.avgCookiesPerSale);
};

Store.prototype.calculateCookiesSoldEachHour = function(){
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};


Store.prototype.renderHours = function(){
  this.calculateCookiesSoldEachHour();

  var storesContainer = document.getElementById('stores');
  // console.log(storesContainer);
  var headerEl = document.createElement('th');
  // console.log(headerEl);
  headerEl.textContent = this.name;
  storesContainer.appendChild(headerEl);

  var ulEl = document.createElement('tr'); //create an element
  console.log(this.cookiesSoldEachHour);

  var totalCookies = 0;
  for(var i in this.cookiesSoldEachHour){ 
    var listItemEl = document.createElement('td');
    listItemEl.textContent = this.cookiesSoldEachHour[i];
    totalCookies += this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }
 // listItemEl =document

     var totalContainer = document.createElement('td');
    totalContainer.textContent = `Total Cookies: ${totalCookies}`;
    ulEl.appendChild(totalContainer);

 
  //append the ul
  storesContainer.appendChild(ulEl);
};

pikePlace.renderHours();
seaTac.renderHours();
seattleCenter.renderHours();
capitolHill.renderHours();
alki.renderHours();
