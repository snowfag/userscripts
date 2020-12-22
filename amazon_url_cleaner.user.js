// ==UserScript==
// @run-at document-end
// @name Amazon URL Cleaner
// @namespace https://github.com/snowfag/userscripts
// @author snowfag
// @description Cleans all the crud out of an Amazon item URL to make it as short as possible
// @include /^https?:\/\/(www|smile)\.amazon\.(com?)(\.[a-z]{2})?\/(.*\/)?(dp|gp\/product)\/[A-Z0-9]{10}(.*)?$/
// @version 3.0
// @updateURL https://github.com/snowfag/userscripts/raw/master/amazon_url_cleaner.user.js
// ==/UserScript==
history.replaceState(null, "Amazon URL Cleaner", "/dp/" + document.getElementById('ftSelectAsin').value);
