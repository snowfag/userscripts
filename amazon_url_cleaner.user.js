// ==UserScript==
// @run-at document-end
// @name Amazon URL Cleaner
// @namespace https://github.com/snowfag/userscripts
// @author snowfag
// @description Cleans all the crud out of an Amazon item URL to make it as short as possible
// @match *://*.amazon.com/*/dp/*
// @match *://*.amazon.com/gp/product/*
// @version        2.0
// ==/UserScript==
var newurl = 'https://smile.amazon.com/dp/' + document.getElementById('ASIN').value;
if (newurl != document.URL) location.replace(newurl);
