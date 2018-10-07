'use strict'

//Constructors for stores
var createTable = document.getElementById('stores');
var Store = function(name, minCustomersperHour, maxCustomersPerHour, averageCookiesSoldPerCustomer){
    this.name = name;
    this.min = minCustomersperHour;
    this.max = maxCustomersPerHour;
    this.avgCookiesPerSale = averageCookiesSoldPerCustomer;
    this.customersPerHour = [];
    this.cookiesSoldEachHour = [];
    this.totalCookies = 0;
    this.meatAndPotatoes();
};


//var newArray = [pikePlace, seaTac, seattleCenter, capitolHill, alki];
//var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM','11AM','12AM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM']
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
    console.log(this.totalCookies + "total cookies");
    console.log(cookieVar);

  }
}

Store.prototype.renderHours = function(){
  this.calculateCookiesSoldEachHour();


};

Store.prototype.meatAndPotatoes = function () {
    this.calculateCookiesSoldEachHour();
    var total = 0;
    var createMeatAndPotatoesRows = document.createElement('tr');
    var createMeatAndPotatoesData = document.createElement('td');
    createMeatAndPotatoesData.textContent = this.name;
    createMeatAndPotatoesRows.appendChild(createMeatAndPotatoesData);
    for (var i = 0; i < 15; i++){
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
    console.log(total +'hi');

};


var headerRow = function() {
    var createHeader = ['6am','7am', '8am','9am', '10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];
    
    var tableRows = document.createElement('tr');
    var tableData = document.createElement('th');
    tableData.textContent = `Location`;
    tableRows.appendChild(tableData);
    //tableData.textContent = this.name;
    for(var i = 0; i < createHeader.length; i++) {
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

pikePlace.renderHours();
 seaTac.renderHours();
 seattleCenter.renderHours();
 capitolHill.renderHours();
 alki.renderHours();
