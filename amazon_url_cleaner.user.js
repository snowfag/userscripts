// ==UserScript==
// @run-at document-start
// @name Amazon URL Cleaner
// @namespace https://github.com/snowfag/userscripts
// @author snowfag
// @description Cleans all the crud out of an Amazon item URL to make it as short as possible
// @include /^https?:\/\/(www|smile)\.amazon\.com\/(.*\/)?(dp|gp\/product)\/[A-Z0-9]{10}(.*)?$/
// @version 2.4
// @updateURL https://github.com/snowfag/userscripts/raw/master/amazon_url_cleaner.user.js
// ==/UserScript==
history.replaceState(null, "", "/dp/" + document.getElementById('ASIN').value);
