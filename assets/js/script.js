//Display current time in Jumbotron (moment)
var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));

//create timeblocks from 9am-5pm in hour incrememnts
//make middle column editable

//make save column clickable/save middle column data to local storage
//refresh page and data is still displayed


//if time in first column has passed, change to class="past" AND contenteditable="false"


// description.attr('class', 'past');


//current hour row, change to class="present"


//if time in first column has NOT passed, class="future"

function checkTime() {
    var currentTime = moment().hour();
    console.log(currentTime);
    var h9El = $('#9');
    //if statement in loop
    if (currentTime == h9El){
    $('.description').addClass('present')
    } else if(currentTime > h9El){
        $('.description').addClass('future')
    } else {
        $('.description').addClass('past')
    }
}

checkTime();
