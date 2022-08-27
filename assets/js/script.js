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
    $('.saveBtn').on('click', function(evt) {
        console.log('Button Clicked');
        console.log(evt.target.id);
       let textBoxValue = document.querySelector(`#${evt.target.id}`);
       textBoxValueId = evt.target.id;
       let todoObject = {}
       todoObject[textBoxValueId] = textBoxValue.value
       console.log(textBoxValue);
       const currentLocalStorage = JSON.parse(localStorage.getItem('userInput')) || [];
       currentLocalStorage.push(todoObject);
        localStorage.setItem('userInput', JSON.stringify(currentLocalStorage));
    })
}

storeUserInput();



//function to load local storage
//if has any items -> loop through array, (queryselector)local storage id = local storage value

// for loop
// let variable = querySelector ==> localStorageItem.id
// let variable =querySelector.value ==> localStorageItem.value


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

// Grader Comments:
// There are some areas of improvement worth mentioning; 
// Clicking a time block's save button does save the input text to local storage, I can see the input for the 9am time block if I go look in devtools, but the value is not being displayed in the browser. make sure you are adding that save clickevent to all of the buttons, and use setItem to get saved inputs back from localStorage, similarly to how you use getItem to put them there. 
