//Display current time in Jumbotron 
var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));


//compare time
//make save column clickable/save middle column data to local storage
//refresh page and data is still displayed


//if time in first column has passed, change to class="past" AND contenteditable="false"


// description.attr('class', 'past');


//current hour row, change to class="present"


//if time in first column has NOT passed, class="future"

// function checkTime() {
//     var currentTime = moment().hour();
//     console.log(currentTime);
//     var h9El = $('#9');
//     //if statement in loop
//     if (currentTime == h9El){
//     $('.description').addClass('present')
//     } else if(currentTime > h9El){
//         $('.description').addClass('future')
//     } else {
//         $('.description').addClass('past')
//     }
// }


//loop through each timeblock .hour & comapre to currentTime
function checkTime() {
    var currentTime = moment().hour();
    console.log(currentTime);
    //if statement in loop
    $('.hour').each(function(i) {
        if (currentTime === '.hour') {
    $('.description').addClass('present')
    } else if(currentTime > '.hour'){
        $('.description').addClass('future')
    } else {
        $('.description').addClass('past')
    }
    })};

    checkTime();

// Time IDs as an array
// var timeIds = ['9', '10', '11', '12', '1', '2', '3', '4', '5']