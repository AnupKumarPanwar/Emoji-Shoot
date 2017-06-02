controllers

.controller('StartCtrl', function($scope, $timeout, $compile, Game, $state,$cordovaSocialSharing, $http) {
	$scope.game = Game;

	$scope.game.challengeMod=false;

		$scope.sendChallenge=function()
		{	
			// alert('y');
			$scope.game.challengeMod=!$scope.game.challengeMod;
			// $http.get('http://hashbnm.16mb.com/emojishoot/test.php')
			// 	.then(function(){

			// 	});
		};



 	$scope.shareAnywhere = function() {
 			if($scope.game.hasPlayed) {

 				var message = 'Hey! I just scored ' + $scope.game.score + ' on *Emoji Shoot*\n\n';
 				// var imageSource = 'https://www.youthcanvas.com/thumb/' + imageUrl;
 				var shareLink = 'https://play.google.com/store/apps/details?id=com.anupkumarpanwar.game.emoji.shoot.dynamite';
 				window.plugins.socialsharing.share(message, 'Emoji Shoot', null, shareLink);

        // $cordovaSocialSharing.share("I just scored " + $scope.game.score + " on Emojimon", null, null, device.platform == "Android" ? "https://play.google.com/store/apps/details?id=com.ionicframework.emojimon715922" : "https://itunes.apple.com/us/app/emojimon/id1010959753?ls=1&mt=8"); //TODO: switch for ios url
 			} else {
 				var message = 'Hey! Download *Emoji Shoot.* It\'s awesome. Honest.\n\n';
 				// var imageSource = 'https://www.youthcanvas.com/thumb/' + imageUrl;
 				var shareLink = 'https://play.google.com/store/apps/details?id=com.anupkumarpanwar.game.emoji.shoot.dynamite';
 				window.plugins.socialsharing.share(message, 'Emoji Shoot', null, shareLink);

 				 // $cordovaSocialSharing.share("Download Emojimon. It's awesome. Honest.", null, null, device.platform == "Android" ? "https://play.google.com/store/apps/details?id=com.ionicframework.emojimon715922" : "https://itunes.apple.com/us/app/emojimon/id1010959753?ls=1&mt=8"); //TODO: switch for ios url
 			}
    }

    $scope.usernameChange = function() {
    	$scope.game.saveLocalStorage();
    }

});
