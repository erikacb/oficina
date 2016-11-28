
var sorteioApp = angular.module('sorteioApp', []);

sorteioApp.controller('SorteioController', function SorteioController($scope) {

  $scope.nomeDoParticipante = '';

  $scope.participantes = [ ];

  $scope.sorteados = [ ]; // este array receberá a posição do participante sorteado

  $scope.resultado = '';

  $scope.foiSorteado = -1; // a busca dentro do array retorna -1 sempre que algo NÃO é encontrado!



  $scope.adicionarParticipante = function() {
      $scope.participantes.push($scope.nomeDoParticipante);
      $scope.nomeDoParticipante = "";
      console.log($scope.participantes);
  };

  $scope.limpa = function() {
    $scope.participantes = [ ];
    $scope.resultado = '';
  };

  $scope.sorteia = function() {

    // mostra no console todos os participantes que estarão no sorteio
    console.log($scope.participantes);

    // gera um número aleatório dentro do intervalo desejado e faz -1 por causa do array
    $scope.random = Math.floor(Math.random() * $scope.participantes.length);

    // procura o nome do sorteado no array de participantes
    $scope.sorteado = $scope.participantes[$scope.random];

    // procura no array de sorteados
    $scope.foiSorteado = $scope.sorteados.indexOf($scope.random);

    // se não foi sorteado, exibe o nome
    if ($scope.foiSorteado == -1) {
      $scope.resultado = $scope.sorteado + ' foi sorteado(a)! Parabéns!';
    } else {
      $scope.resultado = $scope.sorteado + ' já foi sorteado(a). Clique para sortear outro(a) participante!';
    }

    // insere o número do sorteado no array de sorteados
    $scope.sorteados.push($scope.random);

  };

});
