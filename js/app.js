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


	/* Directives */

	app.directive('pizzaTitle',function(){
		return {
			restrict: 'E',
			templateUrl: 'pizza-title.html'
		}
	});//pizzaTitle directive

	app.directive('panelTabs',function(){
		return {
			restrict: 'E',
			templateUrl: 'panel-tabs.html'
		}
	});//panelTabs directive

	app.directive('pizzaDescription',function(){
		return {
			restrict: 'E',
			templateUrl: 'pizza-description.html'
		}
	});//pizza description directive

	app.directive('pizzaIngredients',function(){
		return {
			restrict: 'E',
			templateUrl: 'pizza-ingredients.html'
		}
	});//pizza ingredients directive

	app.directive('pizzaReviews',function(){
		return {
			restrict: 'E',
			templateUrl: 'pizza-reviews.html'
		}
	});//pizza reviews directive


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
					author: 'Joshua87@email.com'
				},
				{
					stars: '4',
					comment: 'I love it because of its classical flavour',
					author: 'iLovePizza@email.com'
				}
			]
		},
		{
			name: 'Hawaii',
			price: 6.95,
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
					ing: 'Pinapple',					
				},
				
				
			],

			image: 'hawaii.jpeg',
			reviews:
			[
				{
					stars: '1',
					comment: 'How can someone eat a pinapple pizza? It have a sweet flavour. I hate it!',
					author: 'classcalBob@email.com'
				},
				{
					stars: '5',
					comment: 'I really like this pizza because it has a fresh flavour.',
					author: 'max82@email.com'
				}
			]
		},
		{
			name: 'Pepperoni',
			price: 6.95,
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
					ing: 'Pepperoni',					
				},
				
				
			],

			image: 'pepperoni.jpeg',
			reviews:
			[
				
			]
		},
		{
			name: 'Napolitana',
			price: 6.95,
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
					ing: 'Spinach',					
				},
				
				
			],

			image: 'napolitana.jpeg',
			reviews:
			[
				
			]
		},
		{
			name: 'Prosciuto',
			price: 6.95,
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
					ing: 'Spinach',					
				},
				
				
			],

			image: 'prosciuto.jpeg',
			reviews:
			[
				
			]
		}
		
	];

})();