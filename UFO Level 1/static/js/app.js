// from data.js
var tableData = data;
// confirming data in console
console.log(tableData)
// YOUR CODE HERE!
// reference the table body
var tbody = d3.select("tbody");

//go through sighting values for each column
tableData.forEach(function(ufoSight) {
    console.log(ufoSight);

    var row = tbody.append("tr");

    Object.entries(ufoSight).forEach(function([d,i]){
        console.log(d,i);
    });

});
    