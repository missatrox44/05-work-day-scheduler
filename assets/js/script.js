//Display current time in Jumbotron 
var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));


//compare timeblock to current Time
var textBox = $('.description')
console.log(textBox);

//function to change color of textarea based on currentTime
function checkTime() {
    var currentTime = moment().hour();
    console.log(currentTime);
    for (var i = 0; i < textBox.length; i++) {
        if (currentTime === i + 9) {
            $(textBox[i]).addClass('present');
        } else if (currentTime < i + 9) {
            $(textBox[i]).addClass('future');
        } else {
            $(textBox[i]).addClass('past');
        }
    }
};

checkTime();


// Save user input to local storage
var saveBtn = $('.saveBtn');

function storeUserInput (){
    $('.saveBtn').on('click', function() {
        console.log('Button Clicked');
        console.log(textBox.val());
        localStorage.setItem('userInput', textBox.val());
    })
}

storeUserInput();


//refresh page and data is still displayed
// function init () {
//     var storedInput = JSON.parse(localStorage.getItem('userInput'));
//     console.log(storedInput);
// }

// init()


// Read Data from Local Storage
var userText = localStorage.getItem('userInput');

// Remove Data from Local Storage
// localStorage.removeItem(key);

// Remove All (Clear Local Storage)
// localStorage.clear();

