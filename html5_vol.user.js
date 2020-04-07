// ==UserScript==
// @run-at document-end
// @name HTML5 av default volume changer
// @namespace https://github.com/snowfag/userscripts
// @author snowfag
// @description Cleans all the crud out of an Amazon item URL to make it as short as possible
// @include /^https?:\/\/i.lolicon.eu\/.*$/
// @include /^https?:\/\/www.tiktok.com/.*$/
// @version 1.0
// @updateURL https://github.com/snowfag/userscripts/raw/master/html5_vol.user.js
// ==/UserScript==
document.getElementsByTagName('video')[0].volume = 0.2;
