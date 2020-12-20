"use strict";
exports.__esModule = true;
var url_query_builder_1 = require("@elitmiar/url_query_builder");
var qb = new url_query_builder_1["default"]();
// Setting the url
qb.url = 'https://your-url.com';
qb.addQueryParam('page', 1);
qb.addQueryParam('limit', 10);
qb.addQueryParam('inactive', true);
qb.addQueryParam('name', 'joe');
// Outputs: https://your-url.com?page=1&limit=10&inactive=true&name=joe
console.log(qb.getQueryString());
// Removing parameter
qb.removeQueryParam('page');
console.log(qb.getQueryString());
