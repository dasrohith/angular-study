/**
 * 
 */
(function(){
	var gems = [ 
		{ name:'Azurite', price: 1.2, description:'This is a description for Azurite Gem', canPurchase: false },
		{ name:'Ruby', price: 2.2, description:'This is a description for Ruby Gem', canPurchase: true }
		];
	var app = angular.module('gemStore',[]);
	
	
	app.controller('StoreController',function(){
		this.products = gems;
	});
	
})();
