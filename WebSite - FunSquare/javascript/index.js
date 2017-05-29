var map;
var home;
var markersArr = [];
var lastChar;

function initMap() {
	home = {lat:38.433236, lng:27.142346};
	map = new google.maps.Map(document.getElementById('map'),{
		zoom:15,
		center:home
	}); 
	
	var mapScript = document.createElement('script');
	mapScript.src = "../javascript/tempjson.js";
	document.getElementById('map').appendChild(mapScript);
}
	
window.funsquare_callback = function(results) {
	markersArr = results;
	for(var i = 0; i < results.features.length; i++) {
		var coords = results.features[i].geometry.coordinates;
		var latLng = new google.maps.LatLng(coords[0],coords[1]);
	}
}

function showMarker(location) {
	var latlong;
	for(var i  = 0; i < markersArr.features.length; i++) {
		if(markersArr.features[i].id == location) {
			lastChar = markersArr.features[i].id.substr(markersArr.features[i].id.length-1);
			var coords = markersArr.features[i].geometry.coordinates;
			latlong = new google.maps.LatLng(coords[0],coords[1]);
			var marker = new google.maps.Marker({
				position: latlong,
				map: map,
				draggable: true,
				animation: google.maps.Animation.DROP,
				label: lastChar
			});
		}
	}
}

function showAllMarker() {
	for(var i = 0; i < markersArr.features.length; i++) {
		var coords = markersArr.features[i].geometry.coordinates;
		var latLng = new google.maps.LatLng(coords[0],coords[1]);
		var marker = new google.maps.Marker({
			position: latLng,
			animation: google.maps.Animation.DROP,
			map: map
		});
	}
}

function toggleBounce() {
	if(marker.getAnimation() !== null) {
		marker.setAnimation(null);
	}
	else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}
}

function clearMarkers() {

}
