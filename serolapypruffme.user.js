// ==UserScript==
// @name         Serolapy Pruffme mod
// @namespace    https://catwar.su/cat982738
// @version      ~default~
// @description  Немного плюшек для вашего Pruffme
// @copyright	 2022, Serolapy
// @license		 MIT
// @author       Serolapy
// @include      https://pruffme.com/*
// ==/UserScript==

(function(){
	//вебинар
	if (document.location.pathname == '/webinar/'){
        window.onload = function () {
		    $.get('https://raw.githubusercontent.com/Serolapy/SerolapyPruffmeMod/master/pages/webinar.js', function(data){
				new Function(data)();
				console.log('Serolapy Pruffme Mod готов.')
            });
        }
	}
})();
