// ==UserScript==
// @name         RoamSwitchGraphs
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       CatoMinor - Twitter: @catominor3
// @match        https://roamresearch.com/
// @icon         https://www.google.com/s2/favicons?domain=roamresearch.com
// @grant        none
// @run-at        document-start
// ==/UserScript==



new MutationObserver(function(mutations) {

    if (document.querySelector(".rm-db-title-container")) {


        let selectGraphOriginal = document.querySelector(".rm-db-title-container");


        console.log(selectGraphOriginal);

        let selectGraphCopy = selectGraphOriginal;
        let placeToInsert = document.querySelector(".rm-topbar > span:nth-child(1)");

        console.log(placeToInsert);
        placeToInsert.before(selectGraphCopy);


        this.disconnect(); // disconnect the observer

    }
}).observe(document, {childList: true, subtree: true});

