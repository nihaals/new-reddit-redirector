// ==UserScript==
// @name         New Reddit Redirector
// @namespace    https://github.com/nihaals/new-reddit-redirector
// @version      0.1.0
// @description  Redirects from old Reddit to new Reddit
// @author       Nihaal Sangha
// @run-at       document-start
// @updateURL	 https://raw.githubusercontent.com/nihaals/new-reddit-redirector/main/new-reddit-redirector.user.js
// @downloadURL  https://raw.githubusercontent.com/nihaals/new-reddit-redirector/main/new-reddit-redirector.user.js
// @supportURL   https://github.com/nihaals/new-reddit-redirector/issues
// @include      *://old.reddit.com/*
// ==/UserScript==

'use strict';

// Redirect from old.reddit.com to www.reddit.com
const url = document.location.href;
window.location.href = url.replace("old.reddit.com/", "www.reddit.com/");
