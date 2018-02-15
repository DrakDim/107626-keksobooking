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

var generateRandomArray = function (array) {
  var copyArray = array.slice(0);
  var resultArray = [];
  var randomIndex;
  for (var i = 0; i < array.length; i++) {
    randomIndex = generateRandomNumbers(0, copyArray.length - 1);
    resultArray.push(copyArray[randomIndex]);
    copyArray.splice(randomIndex, 1);
  }
  return resultArray;
};

var generateRandomLengthArray = function (array) {
  if (array.length > 1) {
    array.length = generateRandomNumbers(1, array.length);
    return array;
  } else {
    return array;
  }
};

var generateOrder = function (index) {
  var location = {
    x: generateRandomNumbers(LOCATION_X_MIN, LOCATION_X_MAX),
    y: generateRandomNumbers(LOCATION_Y_MIN, LOCATION_Y_MAX)
  };
  var features = generateRandomArray(ARRAY_FEATURES);
  return {
    author: {
      avatar: 'img/avatars/user0' + (index + 1) + '.png'
    },
    offer: {
      'title': ARRAY_TITLES[index],
      'address': location.x + ', ' + location.y,
      'price': generateRandomNumbers(PRICE_MIN, PRICE_MAX),
      'type': ARRAY_TYPES[generateRandomNumbers(0, ARRAY_TYPES.length - 1)],
      'rooms': generateRandomNumbers(ROOMS_MIN, ROOMS_MAX),
      'guests': generateRandomNumbers(1, GUESTS_LIMIT),
      'checkin': ARRAY_TIMES[generateRandomNumbers(0, ARRAY_TIMES.length - 1)],
      'checkout': ARRAY_TIMES[generateRandomNumbers(0, ARRAY_TIMES.length - 1)],
      'features': generateRandomLengthArray(features),
      'description': '',
      'photos': generateRandomArray(ARRAY_PHOTOS)
    },
    location: location
  };
};

var order = [];
for (var i = 0; i < ORDER_LIMIT; i++) {
  order.push(generateOrder(i));
}
