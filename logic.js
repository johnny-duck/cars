$( document ).ready(function() {
    $.get("http://localhost/cars/carslist.json",
		function(data, status) {
			if (status == "success") {
				var output = $("#masini")[0];
				var list = "<ul id='carlist'>";
				for (var i = 0; i < data.length; i++) {
					list += "<li class='car_el' id='car" + (i+1) +"' onclick='getDetails(" + i + ")'>";
					list += data[i].id;
					list += " " + data[i].numar;
					list += "</li>";	
				}
				list += "</ul>";
				output.innerHTML = list;
			} else {
			console.log("ERROR!");				
			}
		})
});

function getDetails(id) {
    $.get("http://localhost/cars/car"+(id+1) +".json",
		function(data, status) {
			if (status == "success") {
				var output = $("#descriere")[0];
				var div = "<div class='divdetails'>";
				div += "<img class='car_pic' src='";
				div += data.poza;
				div += "'>";
				div += data.descriere;
				div += "</div>";
				output.innerHTML = div;
			} else {
			console.log("ERROR!");	
			alert("Car not found");
			}

		})


}