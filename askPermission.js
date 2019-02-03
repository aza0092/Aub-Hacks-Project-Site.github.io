window.onload = function() {
  var startPos;
  var geoOptions = {
  timeout: 10 * 1000
}

var geoSuccess = function(position) {
  startPos = position;
  document.getElementById('startLat').innerHTML = startPos.coords.latitude;
  document.getElementById('startLon').innerHTML = startPos.coords.longitude;
};
var geoError = function(error) {
  console.log('Error occurred. Error code: ' + error.code);
 };

   navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
 };
