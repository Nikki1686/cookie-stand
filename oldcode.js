

/*
var pikePlace = {
    name: 'First and Pike',
    min: 23,
    max: 65,
    avgCookiesPerSale: 6.3,
    cookiesSoldEachHour: [],
    totalCookies: 0,
};

//function to calculate customers per hour
pikePlace.calculateCustomersPerHour = function () {
    var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.round(randomAmount * this.avgCookiesPerSale);
    //returns a single random number representing sales in a single hour(33)
};
//amount of cookies sold for a length of time
pikePlace.calculateCookiesSoldEAchHour = function () {
    console.log(this);
    for (var i = 0; i < 15; i++) {
        var cookies = this.calculateCustomersPerHour();
        this.cookiesSoldEachHour.push(cookies);
        this.totalCookies += cookies;
    }
};

pikePlace.renderHours = function () {
    this.calculateCookiesSoldEAchHour();
    var storesContainer = document.getElementById('stores');
    console.log(storesContainer);
    var headerEl = document.createElement('h2');
    console.log(headerEl);
    headerEl.textContent = this.name;
    storesContainer.appendChild(headerEl);
    //create UL
    var ulEl = document.createElement('ul');
    console.log(this.cookiesSoldEachHour);

    for (var i = 0; i < this.cookiesSoldEachHour.length; i++) {
        var listItemEl = document.createElement('li');
        console.log(listItemEl);
        listItemEl.textContent = this.cookiesSoldEachHour[i];
        ulEl.appendChild(listItemEl);
    }
    var listItemEl2 = document.createElement('li');
    console.log(listItemEl2);
    listItemEl2.textContent = this.totalCookies;
    ulEl.appendChild(listItemEl2);
    //append the ul
    storesContainer.appendChild(ulEl);
};
pikePlace.renderHours();

//SeaTac Store
var seaTac = {
    name: 'SeaTac Airport',
    min: 3,
    max: 24,
    avgCookiesPerSale: 1.2,
    cookiesSoldEachHour: [],
    totalCookies: 0,
};

seaTac.calculateCustomersPerHour = function () {
    var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.round(randomAmount * this.avgCookiesPerSale);
};

seaTac.calculateCookiesSoldEAchHour = function () {
    console.log(this);
    for (var i = 0; i < 15; i++) {
        var cookies = this.calculateCustomersPerHour();
        this.cookiesSoldEachHour.push(cookies);
        this.totalCookies += cookies;
    }
};

seaTac.renderHours = function () {
    this.calculateCookiesSoldEAchHour();
    var storesContainer = document.getElementById('stores');
    console.log(storesContainer);
    var headerEl = document.createElement('h2');
    console.log(headerEl);
    headerEl.textContent = this.name;
    storesContainer.appendChild(headerEl);
    var ulEl = document.createElement('ul');
    console.log(this.cookiesSoldEachHour);
    for (var i = 0; i < this.cookiesSoldEachHour.length; i++) {
        var listItemEl = document.createElement('li');
        console.log(listItemEl);
        listItemEl.textContent = this.cookiesSoldEachHour[i];
        ulEl.appendChild(listItemEl);
    }
    var listItemEl2 = document.createElement('li');
    console.log(listItemEl2);
    listItemEl2.textContent = this.totalCookies;
    ulEl.appendChild(listItemEl2);
    //append the ul
    storesContainer.appendChild(ulEl);
};
seaTac.renderHours();

//Seattle Center

var seattleCenter = {
    name: 'Seattle Center',
    min: 11,
    max: 38,
    avgCookiesPerSale: 3.7,
    cookiesSoldEachHour: [],
    totalCookies: 0,
};

seattleCenter.calculateCustomersPerHour = function () {
    var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.round(randomAmount * this.avgCookiesPerSale);
};

seattleCenter.calculateCookiesSoldEAchHour = function () {
    console.log(this);
    for (var i = 0; i < 15; i++) {
        var cookies = this.calculateCustomersPerHour();
        this.cookiesSoldEachHour.push(cookies);
        this.totalCookies += cookies;
    }
};

seattleCenter.renderHours = function () {
    this.calculateCookiesSoldEAchHour();
    var storesContainer = document.getElementById('stores');
    console.log(storesContainer);
    var headerEl = document.createElement('h2');
    console.log(headerEl);
    headerEl.textContent = this.name;
    storesContainer.appendChild(headerEl);

    //create element
    var ulEl = document.createElement('ul');
    console.log(this.cookiesSoldEachHour);

    //give content to ul
    for (var i = 0; i < this.cookiesSoldEachHour.length; i++) {
        var listItemEl = document.createElement('li');
        console.log(listItemEl);
        listItemEl.textContent = this.cookiesSoldEachHour[i];
        ulEl.appendChild(listItemEl);
    }
    var listItemEl2 = document.createElement('li');
    console.log(listItemEl2);
    listItemEl2.textContent = this.totalCookies;
    ulEl.appendChild(listItemEl2);
    //append the ul
    storesContainer.appendChild(ulEl);
};
seattleCenter.renderHours();

//Capitol Hill

var capHill = {
    name: 'Capitol Hill',
    min: 20,
    max: 38,
    avgCookiesPerSale: 2.3,
    cookiesSoldEachHour: [],
    totalCookies: 0,
};
//calculate customers per hour
capHill.calculateCustomersPerHour = function () {
    var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.round(randomAmount * this.avgCookiesPerSale);
};

capHill.calculateCookiesSoldEAchHour = function () {
    console.log(this);
    for (var i = 0; i < 15; i++) {
        var cookies = this.calculateCustomersPerHour();
        this.cookiesSoldEachHour.push(cookies);
        this.totalCookies += cookies;
    }
};
//render Hours
capHill.renderHours = function () {
    this.calculateCookiesSoldEAchHour();
    var storesContainer = document.getElementById('stores');
    console.log(storesContainer);
    var headerEl = document.createElement('h2');
    console.log(headerEl);
    headerEl.textContent = this.name;
    storesContainer.appendChild(headerEl);
    //create Ul
    var ulEl = document.createElement('ul');
    console.log(this.cookiesSoldEachHour);
    for (var i = 0; i < this.cookiesSoldEachHour.length; i++) {
        var listItemEl = document.createElement('li');
        console.log(listItemEl);
        listItemEl.textContent = this.cookiesSoldEachHour[i];
        ulEl.appendChild(listItemEl);
    }
    var listItemEl2 = document.createElement('li');
    console.log(listItemEl2);
    listItemEl2.textContent = this.totalCookies;
    ulEl.appendChild(listItemEl2);

    //append the ul
    storesContainer.appendChild(ulEl);
};
capHill.renderHours();

//alki

var alki = {
    name: 'Alki',
    min: 2,
    max: 16,
    avgCookiesPerSale: 4.6,
    cookiesSoldEachHour: [],
    totalCookies: 0,
};

//function to calculate customers per hour
alki.calculateCustomersPerHour = function () {
    var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    return Math.round(randomAmount * this.avgCookiesPerSale);
};
//amount of cookies sold for a length of time
alki.calculateCookiesSoldEAchHour = function () {
    console.log(this);
    for (var i = 0; i < 15; i++) {
        var cookies = this.calculateCustomersPerHour();
        this.cookiesSoldEachHour.push(cookies);
        this.totalCookies += cookies;
    }
};

alki.renderHours = function () {
    this.calculateCookiesSoldEAchHour();
    var storesContainer = document.getElementById('stores');
    console.log(storesContainer);
    var headerEl = document.createElement('h2');
    console.log(headerEl);
    headerEl.textContent = this.name;
    storesContainer.appendChild(headerEl);
    //create ul
    var ulEl = document.createElement('ul');
    console.log(this.cookiesSoldEachHour);
    for (var i = 0; i < this.cookiesSoldEachHour.length; i++) {
        var listItemEl = document.createElement('li');
        console.log(listItemEl);
        listItemEl.textContent = this.cookiesSoldEachHour[i];
        ulEl.appendChild(listItemEl);
    }
    var listItemEl2 = document.createElement('li');
    console.log(listItemEl2);
    listItemEl2.textContent = this.totalCookies;
    ulEl.appendChild(listItemEl2);

    //append the ul
    storesContainer.appendChild(ulEl);
};
alki.renderHours();


*/
