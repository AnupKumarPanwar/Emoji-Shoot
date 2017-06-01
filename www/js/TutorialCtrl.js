controllers

.controller('TutorialCtrl', function($scope, $timeout, $compile, Game, $state) {
	AdMob.prepareInterstitial({
	    adId: admobid.interstitial,
	    autoShow: true
	});
		$scope.game = Game;
		$scope.game.playedFirstTime();
});
