//Display current time in Jumbotron 
var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));


//compare timeblock to current Time
var textBox = $('.description').toArray();
// console.log(textBox);

//function to change color of textarea based on currentTime
function checkTime() {
    var currentTime = moment().hour();
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

//Save user input to local storage
var saveBtn = $('.saveBtn');

function saveUserInput (){
    saveBtn.on('click'), function(){
        // localStorage.setItem('textBox', textBox.val());
        localStorage.setItem('textBox', textBox.input);
    }
}

saveUserInput();

//refresh page and data is still displayed
$(textBox.input).val(localStorage.getItem(textBox));
