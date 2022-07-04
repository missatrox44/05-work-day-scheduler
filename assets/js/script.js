//Display current time in Jumbotron 
var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));


//compare time
//make save column clickable/save middle column data to local storage
//refresh page and data is still displayed




// var textBox = $['#9', '#10', '#11', '#12', '#13', '#14', '#15', '#16', '#17'];
//function to change color of textarea based on currentTime
//target IDs instead of class to indiviual check timeblocks
function checkTime() {
    var currentTime = moment().hour();
    console.log(currentTime);
    for (var i = 9; i < 18; i++) {
        if (currentTime === i) {
            textBox.addClass('present');
        } else if (currentTime > i) {
            textBox.addClass('future');
        } else {
            textBox.addClass('past');
        }
    }
};

checkTime();


// $(#hour-${i}`).addClass('past');`

//need to change 