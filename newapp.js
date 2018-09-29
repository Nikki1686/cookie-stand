var capHill = { 
    name:'First and Pike',
    min: 23,
    max: 65,
    avgCookiesPerSale: 6.3,
    cookiesSoldPerHour: [],
};


  capHill.calculateCustomersPerHour = function(){
    var randomAmount = Math.round(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.round(randomAmount * this.avgCookiesSoldPerCustomer);

  };   
  capHill.calculateCookiesSoldEachHour = function(){
    console.log(this);
    for(var i = 0; i < 15; i++){
      this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
    }
  };
  capHill.renderHours = function(){
    this.calculateCookiesSoldEachHour();
  
    var storesContainer = document.getElementById('stores');
    // console.log(storesContainer);
    var headerEl = document.createElement('h2');
    // console.log(headerEl);
    headerEl.textContent = this.name;
    storesContainer.appendChild(headerEl);
  
    var ulEl = document.createElement('ul'); //create an element
    console.log(this.cookiesSoldEachHour);
  
    for(var i in this.cookiesSoldEachHour){ // give ul content
      // same as
      //for(var i = 0; i < this.cookiesSoldEachHour.length; i++)
      var listItemEl = document.createElement('li');
  
      // console.log(listItemEl);
      listItemEl.textContent = this.cookiesSoldEachHour[i];
      ulEl.appendChild(listItemEl);
    }
  
    //append the ul
    storesContainer.appendChild(ulEl);
  };
  capHill.renderHours();
  //pikePlace.calculateCookiesSoldEachHour();


/*  var seaTac = new stores('SeaTac', 30, 35, 3.14);
  console.log(seaTac);
 
var seattleCenter = new stores('Seattle Center', 11, 38, 3.7);
console.log(seattleCenter);

var capitolHill = new stores('Capitol Hill', 20, 38, 2.3);
console.log(capitolHill);

var alki = new stores('Alki', 2, 16, 4.6);
console.log(alki);
*/




/*
    pike.calculateCustomersPerHour = function {
        var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        return Math.round(randomAmount * this.avgCookiesPerSale);
    }
    purchasedCookies: this.customerGenerator * this.avgCookies,
    return purchasedCookies,

};

var seaTac = {
    name:'SeaTac Airport',
    min: 3,
    max: 24,
    avgCookies: 1.2,
    customerGenerator: function(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min)
    }
};

*/


var hours = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
var totalCookies = 0;
//Pike Place Store
var pikePlace = {
    name: 'First and Pike',
    min: 23,
    max: 65,
    avgCookiesSoldPerCustomer: 6.3,
    cookiesSoldPerHour: [],
    randomCustomersPerHour:[],
    totalCookiesPerDay:[],

    calculateCustomersPerHour: function (min, max) {
        for (var i = 0; i < hours.length; i++) {
            var randomCustomers = Math.round(Math.random() * (this.max - this.min + 1)) + this.min;
            this.randomCustomersPerHour.push
            console.log(randomCustomers);
        }
    },
    calculateCookiesSoldPerHour: function () {
        this.calculateCustomersPerHour();
        for (var i = 0; i < this.randomCustomersPerHour.length; i++) {
            var cookiesSoldPerHour = Math.round(this.avgCookiesSoldPerCustomer * this.randomCustomersPerHour[i]);
            this.cookiesSoldPerHour.push(cookiesSoldPerHour);
            console.log(cookiesSoldPerHour);
        }
    }, 
    totalCookiesPerDay: function () {
        this.calculateTotalCookiesPerDay();
        for (var i = 0; i < this.randomCustomersPerHour.length; i++) {
            var totalCookiesPerDay = Math.round(this.cookiesSoldPerHour * this.randomCustomersPerHour[i]);
            this.totalCookiesPerDay.push(totalCookiesPerDay);
            console.log(totalCookiesPerDay);
        }
    },
};

/*
    pikePlace.totalCookiesSoldPerDay = function () {
        for (var i = 0; i < this.cookiesSoldEachHour.length; i++)
            totalCookies += this.totalCookies;
        this.totalCookiesPerDay(totalCookies);
    };
};
/*
//Render Hours
pikePlace.renderHours = function () {
    this.calculateCookiesSoldPerHour();
    var storesContainer = document.getElementById('stores');
    var nameEl = document.createElement('h2');
    nameEl.textContent = this.name;
    storesContainer.appendChild(nameEl);

    var ulEl = document.createElement('ul'); //create an element
    this.calculateCustomersPerHour();
    this.calculateCookiesSoldPerHour;

    for (var i = 0; i < hoursOpen.length; i++) {
        var listItemEl = document.createElement('li');
        listItemEl.textContent = ((hoursOpen[i]) + ':' + (this.randomCustomersPerHour[i]) + ':' + (this.cookiesSoldPerHour[i]));
        ulEl.appendChild(listItemEl);
    }
};
pikePlace.rendertotalCookies();
pikePlace.rendercookiesSoldPerHour();
pikePlace.rendertotalHours();
*/

