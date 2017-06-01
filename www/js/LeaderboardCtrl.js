controllers

.controller('LeaderboardCtrl', function($scope, Game, Leaderboard) {

	AdMob.prepareInterstitial({
	    adId: admobid.interstitial,
	    autoShow: true
	});
	
		$scope.game = Game;
		$scope.leaderboard = Game.leaderboard;
});
