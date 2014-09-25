/* Directives */
(function(){

		var app = angular.module('pizzeria-products',[]);
		
		app.directive('pizzaTitle',function(){
		return {
			restrict: 'E',
			templateUrl: 'pizza-title.html'
		}
	});//pizzaTitle directive

	app.directive('pizzaPanels',function(){
		return {
			restrict: 'E',
			templateUrl: 'pizza-panels.html',
			controller:function(){
				this.panel = 1;

				this.isActive = function(panel){
					return this.panel === panel;
				};

				this.selectPanel = function(selectedPanel){

					this.panel = selectedPanel;
				};
			},
			controllerAs:'panel'
		}
	});//pizzaTitle directive









})();
