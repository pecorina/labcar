function initMap(){
    var map = new google.maps.Map(document.getElementById("map"), {
    	zoom: 5, /*representa el nivel de profundidad de nuestro papa, entre mas zoom mas localizado se vera.*/
    	center: {lat: -9.1191427, lng: -77.0349046},/*contiene la longitud y latitud en q queremos q se muestre nuestro mapa*/
    	mapTypeControl: false,
    	zoomControl: false,
    	streetViewControl: false
    });

/*dentro de initmap*/

function buscar(){
	if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
/*getCurrenPosition: permite al usuario obtener su ubicacion actual.
funcionExito: seejecuta solo cuando el usuario comparte su ubicación.
funcionError: se ejecuta cuando se produce un error en la geolocalizacion.*/
	}
}
document.getElementById("encuentrame").addEventListener("click", buscar);
var latitud, longitud;

/*obtendremos nuestra latitud o longitud y ademas crearemos un marcador de nuestra ubicacion*/
var funcionExito = function(posicion){
	latitud = posicion.coords.latitude;
	longitud = posicion.coords.longitude;

	var miUbicacion = new google.maps.Marker({
		position: {lat:latitud, lng:longitud},
		animation: google.maps.Animation.DROP,
		map: map
	});
	map.setZoom(17);
	map.setCenter({lat:latitud, lng:longitud});
}

var funcionError = function (error){
	alert("Tenemos un problema con encontrar tu ubicación");
}


}