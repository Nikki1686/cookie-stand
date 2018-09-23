'use strict'

var pike = {
    name:'1st and Pike',
    min: 23,
    max: 65,
    avgCookies: 6.3,
    customerGenerator: function (min, max) {
        return Math.floor((Math.random() * (max - min +1)) + min)
    }, 
    purchasedCookies: this.customerGenerator * this.avgCookies,
    return: this.purchasedCookies,

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


