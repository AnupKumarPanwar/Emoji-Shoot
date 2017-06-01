var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-3971583580619783/1173462958',
        interstitial: 'ca-app-pub-3971583580619783/2650196152',
        reward: 'ca-app-pub-3971583580619783/9553060552'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-6869992474017983/4806197152',
        interstitial: 'ca-app-pub-3971583580619783/6613192552'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-3971583580619783/6613192552',
        interstitial: 'ca-app-pub-3971583580619783/6613192552'
    };
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

function initApp() {
    if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

    AdMob.createBanner( {
        adId: admobid.banner, 
        position: AdMob.AD_POSITION.BOTTOM_CENTER
    } );
    
    AdMob.prepareInterstitial({
        adId: admobid.interstitial
    });

    // AdMob.showInterstitial();
    // AdMob.prepareRewardVideoAd({
    //     adId: admobid.reward
    // });
     
     
     
     //!!!add the code here!!! - so, just paste what I wrote above:
     setInterval(function(){AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow: true
    })}, 120000);
}