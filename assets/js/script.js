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
    $('.saveBtn').on('click', function() {
        console.log('Button Clicked');
        console.log(textBox.val());
        localStorage.setItem('userTypes', textBox.val());
    })
}


saveUserInput();

//refresh page and data is still displayed
// $(textBox.input).val(localStorage.getItem(textBox));

//get info
//then save
// 2. also each time, save onclick is called, you need to form an object save time and description  and save it in local storage so that you can get it back for later.

// localStorage.setItem(key, value);
// Read Data from Local Storage
// let lastname = localStorage.getItem(key);
// Remove Data from Local Storage
// localStorage.removeItem(key);
// Remove All (Clear Local Storage)
// localStorage.clear();

// In your case, to save 9am description, you can save it in local storage as : for example
// let time = "9";
// let descr = "....."
// localStorage.setItem(time,  descr);
// Later to retrieve it from local   storage
// let 9amdescr = localStorage.getItem("9");
// etc.,