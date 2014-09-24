(function(){

	var app = angular.module('pizzeria',[]);
	app.controller('PizzeriaController',function(){

		this.products = pizzas;


	}); //PizzeriaController

	app.controller('PanelController', function(){
		this.panel = 1;

		this.isActive = function(panel){
			return this.panel === panel;
		};

		this.selectPanel = function(selectedPanel){

			this.panel = selectedPanel;
		};

	});//PanelController


	app.controller('ReviewController',function(){
		this.review = {};

		this.reviewProduct = function(product) {

			product.reviews.push(this.review);
			this.review = {};
		};


	});//ReviewController


	var pizzas = 
	[
		{
			name: 'Margherita',
			price: 5.95,
			available: true,
			commonIngredients: 
			[
				{
					ing: 'Tomato'
				},
				{
					ing: 'Mozzarella'
				},
				{
					ing: 'Oregano'
				}
			],
			flavourIngredients: 
			[
				{
					ing: 'Pepper',					
				},
				{
					ing: 'Basil'
				}
				
			],

			image: 'margherita.jpeg',
			reviews:
			[
				{
					stars: '4',
					comment: 'Very common flavour, but very good taste. I love it!',
					author: 'johnny34@email.com'
				},
				{
					stars: '4',
					comment: 'Very common flavour, but very good taste. I love it!',
					author: 'johnny34@email.com'
				}
			]
		},
		{
			name: 'Margherita',
			price: 5.95,
			available: true,
			commonIngredients: 
			[
				{
					ing: 'Tomato'
				},
				{
					ing: 'Mozzarella'
				},
				{
					ing: 'Oregano'
				}
			],
			flavourIngredients: 
			[
				{
					ing: 'Pepper',					
				},
				{
					ing: 'Basil'
				}
				
			],

			image: 'margherita.jpeg',
			reviews:
			[
				{
					stars: '4',
					comment: 'Very common flavour, but very good taste. I love it!',
					author: 'johnny34@email.com'
				},
				{
					stars: '4',
					comment: 'Very common flavour, but very good taste. I love it!',
					author: 'johnny34@email.com'
				}
			]
		}
		
	];

})();