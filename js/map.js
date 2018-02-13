'use strict';

var ORDER_LIMIT = 8;
var GUESTS_LIMIT = 10;

var PRICE_MIN = 1000;
var PRICE_MAX = 1000000;

var ROOMS_MIN = 1;
var ROOMS_MAX = 5;

var ARRAY_TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var ARRAY_TYPES = ['flat', 'house', 'bungalo'];
var ARRAY_TIMES = ['12:00', '13:00', '14:00'];
var ARRAY_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var ARRAY_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var LOCATION_X_MIN = 300;
var LOCATION_X_MAX = 900;
var LOCATION_Y_MIN = 150;
var LOCATION_Y_MAX = 500;


var generateRandomNumbers = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var generateOrder = function () {
  return {
    author: {
      avatar: ''
    },
    offer: {
      title: '',
      address: '',
      price: '',
      type: '',
      rooms: '',
      guests: '',
      checkin: '',
      checkout: '',
      features: '',
      description: '',
      photos: ''
    },
    location: ''
  };
};
