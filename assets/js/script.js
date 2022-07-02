//Display current time in Jumbotron (moment)
var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));

//create table from 9am-5pm in hour incrememnts

//make middle column editable

//make save column clickable/save middle column data to local storage
//refresh page and data is still displayed


//if time in first column has passed, change to class"table-secondary" AND contenteditable="false"

//current hour row, change to class="bg-danger"

//if time in first column has NOT passed, class="bg-success"