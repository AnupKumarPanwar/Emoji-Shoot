controllers

.controller('ResultCtrl', function($scope, $timeout, $compile, Game, $state, $stateParams) {
	// AdMob.prepareInterstitial({
	//     adId: admobid.interstitial,
	//     autoShow: true
	// });
		$scope.won=$stateParams.won;
		$scope.score=$stateParams.score;
		$scope.game = Game;
		$scope.game.playedFirstTime();
});
