$(document).ready(function() {

	
// dark bg close //
$(".close").click(function(){
    $(".slideshow-container").css({"display": "none"});
    $(".darkBg").css({"display": "none"});
	$(this).css({"display": "none"});
	$("#powered").show();
})
	
// dark bg opens, when clicked on on of the images in galery //
$(".item").click(function(){
	$(".darkBg").css({"display": "block"});
	$(".slideshow-container").css({"display": "flex"});
	$(".close").show();
	$("#powered").hide();
})

//google maps //
$(document).ready(function(){

var mapCanvas = document.getElementById("map");
var mapSetings = {
    center: new google.maps.LatLng(51.5076258,-0.5905128,17), 
	zoom: 11,
	mapTypeId: google.maps.MapTypeId.ROADMAP	
};

var map = new google.maps.Map(mapCanvas, mapSetings);

var pointer = new google.maps.LatLng(51.5076258,-0.5905128,17); // pointer coords //
var marker = new google.maps.Marker({
  position: pointer,
  animation:google.maps.Animation.BOUNCE,
  icon: "images/mapPointer.png",
  title: "SL1 1JU"
  });
  
  // Zoom to 14 when clicking on marker
  google.maps.event.addListener(marker,'click',function() {
    map.setZoom(14);
    map.setCenter(marker.getPosition());
  });

marker.setMap(map);
});

$('[data-toggle="tooltip"]').tooltip();



}); // close //