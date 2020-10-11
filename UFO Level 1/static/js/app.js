// from data.js
var tableData = data;
// confirming data in console
//console.log(tableData)
// YOUR CODE HERE!
// reference the table body
var tbody = d3.select("tbody");

// columns in datatable : "datetime", "city", "state", "country", "shape", "durationMinutes", "comments"

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

// select button event listener
var button = d3.select("#filter-btn");
button.on("click", () => {
    d3.event.preventDefault();
    //d3 to use date input to set as value to filter data
    var inputValue = d3.select("#datetime");
    var inputDate = inputValue.property("value");
    var filteredData = tableData.filter(tableData => tableData.datetime === inputDate);

    console.log(filteredData)

    filteredData.forEach(function(events){
        var row = tbody.append("tr");
        Object.entries(events).forEach(function([d,i]){
            var cell = row.append("td");
            cell.text(i)
    });
    });


});
