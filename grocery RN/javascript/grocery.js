var mydata = JSON.parse(grocery);

for (i = 0; i < mydata.length; i++) {

document.getElementById("gro").innerHTML += 
	`
		<img src="${mydata[i].bild}" alt="${mydata[i].name}" width="300">
	<br>

	<b>${mydata[i].name}</b> 
	<br> 
	Price: ${mydata[i].price} Euro
	<button type="submit" class="button">Add to basket</button>
	<br>
	Status: 
	<hr width="25%" align="left">
	<br>
	`;
}



