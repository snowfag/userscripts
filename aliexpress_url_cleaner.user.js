// ==UserScript==
// @run-at document-end
// @name Aliexpress URL Cleaner
// @namespace https://github.com/snowfag/userscripts
// @author snowfag
// @description Cleans all the crud out of an aliexpress item URL to make it as short as possible
// @include /^https?:\/\/www\.aliexpress\.com\/item\/[0-9]{11}\.html.*$/
// @version 1.0
// @updateURL https://github.com/snowfag/userscripts/raw/master/aliexpress_url_cleaner.user.js
// ==/UserScript==
history.replaceState(null, "Aliexpress URL Cleaner", location.pathname);
