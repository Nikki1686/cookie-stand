'use strict'

var pikePlace = {
    name:'First and Pike',
    min: 23,
    max: 65,
    avgCookiesPerSale: 6.3,
    cookiesSoldEachHour: [],
};

/*
//constructor for all stores

var Store = function(name, minCustomersPerHour, maxCustomersPerHour,averageCookiesSoldPerCustomer)
this.name = name;
this.min = minCustomersPerHour;
this.max = maxCustomersPerHour;
this.averageCookiesSoldPerSale = averageCookiesSoldPerCustomer;
this.cookiesSoldEachHour = [];
*/

pikePlace.calculateCustomersPerHour = function() {
    var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.round(randomAmount * this.avgCookiesPerSale);
};
pikePlace.calculateCookiesSoldEachHour = function() {
    for (var i = 0; i < 15;i++); {
        this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
}
pikePlace.renderHours = function() {
    this.calculateCookiesSoldEachHour();

    var storesContainer = document.getElementById('stores');
    var headerEl = document.createElement('h2');
    headerEl.textContent = this.name;
    storesContainer.appendChild(headerEl);

    var ulEl = document.createElement('ul');//create element
    console.log(this.cookiesSoldEachHour);
    
    for(var i in this.calculateCookiesSoldEachHour) {
        var listItemEl = document.createElement('li');
        listItemEl.textContent = this.cookiesSoldEachHour[i];
        ulEl.appendChild(listItemEl);
    }
    //append the ul
    storesContainer.appendChild(ulEl);
