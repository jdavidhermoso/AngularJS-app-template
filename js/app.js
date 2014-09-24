(function(){

	var app = angular.module('pizzeria',[]);
	app.controller('PizzeriaController',function(){
		this.products = pizzas;

	});

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
					by: 'johnny34@email.com'
				},
			]
		},
		{
			name: 'Hawaii',
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
					ing: 'Pinapple'
				}
			],

			image: 'hawaii.jpeg',
			reviews:
			[
				{
					stars: '2',
					comment: 'When I ate it, my pizza was over cooked, so I didnt like it',
					by: 'stellaMcRough@email.com'
				},
			]

		},
		
	];

})();