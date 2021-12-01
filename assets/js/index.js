let map;
    
function initMap() {

    if("geolocation" in navigator){ //We ask for location support
        console.log("La geolocalización esta permitida");
        navigator.geolocation.getCurrentPosition((function(position){ //We retrieve the current position

            const myLatLng = {lat: position.coords.latitude, lng: position.coords.longitude};
    
            map = new google.maps.Map(document.getElementById("map"), {
                center: myLatLng,
                zoom: 8,
            }); //Displaying maps
    
            new google.maps.Marker({
                position: myLatLng,
                map,
                title: "Mi ubicación Actual",
                label: "Mi ubicación Actual"
            }); //Displaying a Google Marker the current position
        }));
    }
    else
        console.error("No esta permitida la geolocalización en este navegador");
    
}