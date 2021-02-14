// assgning the data from data.js to a variable
let sightings = data;
// establishing a reference to my table's body and input field
let tableBody = d3.select("tbody")
let input = d3.select("input")

// selecting my form and button so I can asasign handlers
let filterButton = d3.select("#filter-btn");
let form = d3.select("#form");
let resetButton = d3.select("#reset-btn");

// creating my event handlers
filterButton.on("click", filterData);
form.on("submit",filterData);
resetButton.on("click", resetData);

// Creating an init function to display the table on startup
function init() {
    sightings.forEach(function(sighting) {
        // Making a row for each sighting in the dataset
        let row = tableBody.append("tr");
        // appending the data from each sighting into my table
        Object.entries(sighting).forEach(function([key, value]) {
            let cell = row.append("td");
            cell.text(value);
        });
    });
};

//making the function for my event handlers
function filterData() {
    //Preventing the page from refreshing
    d3.event.preventDefault();

    //Clearing my table
    tableBody.html("")

    // Selecting the input box
    let inputBox = d3.select("#datetime");

    // Getting the input from the inputBox
    let clientInput = inputBox.property("value");

    //Getting the filtered data from the input
    let filteredData = sightings.filter(sightings => sightings.datetime === clientInput);

    console.log(filteredData)

    //making a new table with the filteredData
    filteredData.forEach(function(instance) {
        let row = tableBody.append("tr");
        Object.entries(instance).forEach(function([key, value]) {
            let cell = row.append("td");
            cell.text(value);
        });
    });
};

function resetData() {
    //clearing my table and input field 
    tableBody.html("")
    input.html("")
    //Rerunning the inital table
    init();

};

init();