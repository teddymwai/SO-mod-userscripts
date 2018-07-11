// ==UserScript==
// @name         Broken Annotation Links Fix
// @description  Fixes broken links in user annotations
// @homepage     https://github.com/samliew/SO-mod-userscripts
// @author       @samliew
// @version      1.0
//
// @include      https://*stackoverflow.com/users/history/*
// @include      https://*serverfault.com/users/history/*
// @include      https://*superuser.com/users/history/*
// @include      https://*askubuntu.com/users/history/*
// @include      https://*mathoverflow.net/users/history/*
// @include      https://*.stackexchange.com/users/history/*
// ==/UserScript==


(function() {
    'use strict';


    function doPageLoad() {

        $('#annotations tr').each(function() {
            const td = $(this).children('td, th').eq(3);
            if(td.children().length > 0) return; // already has links, ignore
            const str = td.text()
            .replace(/&lt;a href=&quot;(\/users\/\d+\/[a-z-]+)&quot;&gt;.+&lt;\/a&gt;/, '<a href="$1" target="_blank">$1</a>')
            .replace(/\s(\/users\/\d+\/[a-z-]+)\s/, ' <a href="$1" target="_blank">$1</a> ')
            .replace(/\s(\/users\/\d+\/[a-z-]+)\s/, ' <a href="$1" target="_blank">$1</a> ')
            .replace(/(https?:\/\/[^\s\)]+)\b/gi, '<a href="$1" target="_blank">$1</a>');
            td.html(str);
        });
    }


    function appendStyles() {

        const styles = `
<style>
</style>
`;
        $('body').append(styles);
    }


    // On page load
    appendStyles();
    doPageLoad();

})();
