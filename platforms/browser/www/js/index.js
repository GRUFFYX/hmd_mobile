function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    screen.orientation.lock('portrait');    
}
document.addEventListener('deviceready', onDeviceReady, false);


