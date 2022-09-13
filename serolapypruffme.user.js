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
		$.get('', function(data){
			new Function(data)();
		});
	}
})();
