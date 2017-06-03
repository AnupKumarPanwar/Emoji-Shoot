controllers

.controller('StartCtrl', function($scope, $timeout, $compile, Game, $state,$cordovaSocialSharing, $http, $stateParams) {
	$scope.game = Game;

	$scope.game.challengeMod=false;





	document.addEventListener("deviceready", function onDeviceReady(w) {

	  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

	        var notificationOpenedCallback = function(jsonData) {
	          alert("Notification received:\n" + JSON.stringify(jsonData));

	          if (jsonData.action.actionID=="accept") 
	          {
	          	if($scope.game.cash>=jsonData.payload.additionalData.amount)
	          	{
	            $scope.game.challengeId=jsonData.payload.additionalData.challengeid;
	            $scope.game.bid=jsonData.payload.additionalData.amount;
	            // $scope.game.challengeScore=jsonData.additionalData.challengescore;
	            $state.go('game', {});
	        	}
	        	else
	        	{
	        		alert('Sorry! You don\'t have enough coins:(\nPlease play the game and earn coins.');
	        	}
	          }
	          else if (jsonData.action.actionID=="reject")
	          {
	            // alert('Challenge Denied');
	          }

	          // console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
	        };
	        
	        window.plugins.OneSignal
	          .startInit("9c182549-2c3b-47a6-81ba-d77fee2909e1")
	          .handleNotificationOpened(notificationOpenedCallback)
	          .endInit();

	          // alert('yo');
          	// alert('yo'+OneSignal.idsAvailable.playerId);
          	// alert('yo'+window.plugins.OneSignal.idsAvailable.playerId);

          	// window.plugins.OneSignal.getIds(function(ids) {
          	//   console.log('getIds: ' + JSON.stringify(ids));
          	//   alert("userId = " + ids.userId + ", pushToken = " + ids.pushToken);
          	// });

	},false);






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
