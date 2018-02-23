// welcome message
var greeting = 'Welcome'
var meeting = ', please check your order:';
var welcome = greeting + meeting;

var el = document.getElementById('greeting');
el.textContent = welcome;

// products price and student discount
var deathadderPrice = 50;
var krakenPrice = 70;
var blackwidowPrice = 100;
var orbweaverPrice = 120;
var studentDiscount = .10;
var deathadderStudentPrice = deathadderPrice - (deathadderPrice * studentDiscount);
var krakenStudentPrice = krakenPrice - (krakenPrice * studentDiscount);
var blackwidowStudentPrice = blackwidowPrice - (blackwidowPrice * studentDiscount);
var orbweaverStudentPrice = orbweaverPrice - (orbweaverPrice * studentDiscount);

var elDeathadderPrice = document.getElementById('deathadderPrice');
elDeathadderPrice.textContent = 'Price: ' + deathadderPrice;

var elDeathadderStudentPrice = document.getElementById('deathadderStudentPrice');
elDeathadderStudentPrice.textContent = 'StudentPrice: ' + deathadderStudentPrice;

var elKrakenPrice = document.getElementById('krakenPrice');
elKrakenPrice.textContent = 'Price: ' + krakenPrice;

var elKrakenStudentPrice = document.getElementById('krakenStudentPrice');
elKrakenStudentPrice.textContent = 'StudentPrice: ' + krakenStudentPrice;

var elBlackWidowPrice = document.getElementById('blackwidowPrice');
elBlackWidowPrice.textContent = 'Price: ' + blackwidowPrice;

var elBlackWidowStudentPrice = document.getElementById('blackwidowStudentPrice');
elBlackWidowStudentPrice.textContent = 'StudentPrice: ' + blackwidowStudentPrice;

var elOrbweaverPrice = document.getElementById('orbweaverPrice');
elOrbweaverPrice.textContent = 'Price: ' + orbweaverPrice;

var elOrbweaverStudentPrice = document.getElementById('orbweaverStudentPrice');
elOrbweaverStudentPrice.textContent = 'StudentPrice: ' + orbweaverStudentPrice;

// extra credit
var itemsNames = ['Deathadder', ' Kraken', ' Blackwidow', ' Orbweaver'];
var itemsPrices = [50 + 70 + 100 + 120];
var totalStudentPrices = deathadderStudentPrice + krakenStudentPrice + blackwidowStudentPrice + orbweaverStudentPrice;

var elTotalPrices = document.getElementById('totalStudentPrices');
elTotalPrices.textContent = 'Total Prices With Student Discount: ' + totalStudentPrices

var elTotalItemPrices = document.getElementById('totalItemsPrices');
elTotalItemPrices.textContent = 'Total Prices Without Student Discount: ' + itemsPrices;

var elStudentDiscount = document.getElementById('studentDiscount');
elStudentDiscount.textContent = 'Student Discount: ' + studentDiscount + '%';

var elTotalItemsNames = document.getElementById('totalItemsNames');
elTotalItemsNames.textContent = 'Total Items Names: ' + itemsNames;
