var numero1 = 12
var numero2 = 0.12
var Brandon = angular.module('Brandon', []);
Brandon.controller('Operaciones', function($scope) {
  $scope.contador = numero1 * numero2;
}); 


