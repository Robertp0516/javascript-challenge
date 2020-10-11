// from data.js
var tableData = data;
// confirming data in console
//console.log(tableData)
// YOUR CODE HERE!
// reference the table body
var tbody = d3.select("tbody");

//go through sighting values for each column
tableData.forEach(function(ufoSight) {
    //checking data format in console
   // console.log(ufoSight);
    //appending the rows "tr" in the table 
    var row = tbody.append("tr");
    //grabbing the key-value pair in the ufo sightings data using object.entries
    Object.entries(ufoSight).forEach(function([d,i]){
       // console.log(d,i);

    var cell = row.append("td");
    cell.text(i)
    });

});

// select button 
var button = d3.select("#filter-btn");
button.on("click", function(){

    tbody.html("");
    // selecting input date to get html keyvalue
    var inputElement = d3.select("datetime");
    // grabbbing value property from the input date to filter data by datetime
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(sighting => sighting.datetime == inputValue);
    //checking filtered values 
    console.log(filteredData);
})

