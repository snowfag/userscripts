// ==UserScript==
// @run-at document-end
// @name Amazon URL Cleaner
// @namespace https://github.com/snowfag/userscripts
// @author snowfag
// @description Cleans all the crud out of an Amazon item URL to make it as short as possible
// @include /^https?:\/\/(www|smile)\.amazon\.com\/(.*\/)?(dp|gp\/product)\/[A-Z0-9]{10}(\/.*)?$/
// @version        2.1
// ==/UserScript==
var newurl = 'https://smile.amazon.com/dp/' + document.getElementById('ASIN').value;
if (newurl != document.URL) location.replace(newurl);
