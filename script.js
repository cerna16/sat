var cantidad1 = 800
var cantidad2 = 0.12
var Cerna = angular.module('Cerna', []);
Cerna.controller('Calculo', function($scope) {
  $scope.iva = cantidad1 * cantidad2;
}); 


