//Display current time in Jumbotron 
var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));


//compare time
//make save column clickable/save middle column data to local storage
//refresh page and data is still displayed

var textBox = $('.description').toArray();
console.log(textBox);

//function to change color of textarea based on currentTime
// console.log(textBox);
function checkTime() {
    var currentTime = moment().hour();
    // var textBox = $('.description').toArray();
    console.log(currentTime);
    for (var i = 0; i < textBox.length; i++) {
        if (currentTime === i+9) {
            $(textBox[i]).addClass('present');
        } else if (currentTime < i+9) {
            $(textBox[i]).addClass('future');
        } else {
            $(textBox[i]).addClass('past');
        }
    }
};

checkTime();


//need to change 