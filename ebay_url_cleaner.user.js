// ==UserScript==
// @run-at document-end
// @name Ebay URL Cleaner
// @namespace https://github.com/snowfag/userscripts
// @author snowfag
// @description Cleans all the crud out of an ebay item URL to make it as short as possible
// @include /^https?:\/\/www\.ebay\.com\/itm\/(.*\/)?[0-9]{11,13}\?.*$/
// @version 1.0
// @updateURL https://github.com/snowfag/userscripts/raw/master/ebay_url_cleaner.user.js
// ==/UserScript==
let pathn = location.pathname;
let itmnumber = pathn.match(/\/itm\/(.*\/)?([0-9]{11,13})/);
history.replaceState(null, "Ebay URL Cleaner", "/itm/" + itmnumber[2]);
