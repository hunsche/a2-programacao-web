var app = angular.module('Projeto', ['ngRoute']);

app.config( function($routeProvider){

	$routeProvider
		.when('/home', {controller: 'home', templateUrl: 'views/home.html'})
		.when('/receita', {controller: 'receita', templateUrl: 'views/receita.html'})
		.when('/despesa', {controller: 'despesa', templateUrl: 'views/despesa.html'})
		.when('/categoria', {controller: 'categoria', templateUrl: 'views/categoria.html'})
		.otherwise({ redirectTo: '/home' });
} );

app.controller('home', home);
app.controller('receita', receita);
app.controller('despesa', despesa);
app.controller('categoria', categoria);

function home($scope, $http) {
	$scope.lancamentos = {};

	$scope.listar = function(){
		$http
			.get('php/lancamento_listar.php')
			.success(function(pacote){
				$scope.lancamentos = pacote;
				console.log($scope.lancamentos);
			});
	}

	$scope.excluir = function(id){
		if (confirm('Deseja excluir o lancamento ('+ id +') agora?'))
			$http
				.get('php/lancamento_excluir.php?id='+id)
				.success( function(retorno){
					$scope.listar();
				} );


	}	

	$scope.listar();	
}

function receita($scope, $http, $location) {
	$scope.categorias = {};
	$scope.lancamento = {
		tipo: 0,
		descricao: '',
		valor: 0,
		idcategoria: 0
	};

	$scope.salvar = function(){
		console.log($scope.lancamento);
		$http
			.post('php/lancamento_inserir.php', $scope.lancamento)
			.success( function(retorno){ 
				$location.path('/home'); 
			} );

	}

	$scope.listar = function(){
		$http
			.get('php/categoria_listar.php')
			.success(function(pacote){
				$scope.categorias = pacote;
				console.log($scope.categorias);
			});
	}


	$scope.listar();
}

function despesa($scope) {
	
}

function categoria($scope, $http, $location) {

	$scope.categorias = {};
	$scope.categoria = {
		nome: ''
	};

	$scope.salvar = function(){
		console.log($scope.categoria);
		$http
			.post('php/categoria_inserir.php', $scope.categoria)
			.success( function(retorno){ 
				$scope.categoria.nome = '';
				$scope.listar();
			} );

	}

	$scope.excluir = function(id){
		if (confirm('Deseja excluir a categoria ('+ id +') agora?'))
			$http
				.get('http://localhost:3000/api/category/' + id)
				.success( function(retorno){
					$scope.listar();
				} );


	}

	$scope.listar = function(){
		
		$http
			.get('http://localhost:3000/')
			.success(function(pacote){
				$scope.categorias = pacote;
				console.log($scope.categorias);
			});
	}

	$scope.listar();
	
}
