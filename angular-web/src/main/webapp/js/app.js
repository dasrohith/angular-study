/**
 * 
 */
(function(){
	var gems = [ 
		{
			name:'Azurite',
			price: 110.50, 
			description:'Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.',
			canPurchase: false,
			images:[]
		},
		{
			name:'Bloodstone',
			price: 22.90, 
			description:'Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.',
			canPurchase: false,
			images:[
			        "images/gem-01.gif",
			        "images/gem-02.gif",
			        "images/gem-03.gif" 
			        ]
		},
		{
			name:'Zircon',
			price: 1100, 
			description:'Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.',
			canPurchase: false,
			images:[
			        "images/gem-04.gif",
			        "images/gem-05.gif",
			        "images/gem-06.gif" 
			        ]
		}
		];
	var app = angular.module('gemStore',[]);
	
	
	app.controller('StoreController',function(){
		this.products = gems;
	});
	
})();
