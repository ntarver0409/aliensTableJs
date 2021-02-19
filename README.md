# aliensTableJs

For this project I used d3 in Javascript in order to display a table of alien sightings. In order to accomplish this I set up 3 functions. 

1. The first function was an init() that went and looped through the data provided, made rows for each sighting, then made the needed cells for each row and popukated them with the relevant data. 

2. The second function was filterData() which took the date input from and input box using d3. It then used that value to sort through the data and only pull values from that date, which it used in order to make a new table with said data to display. 

3. The last function was resetData() which cleared out the html the table was in and displayed the inital table once more.

