document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    screen.orientation.lock('portrait');
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    
}


