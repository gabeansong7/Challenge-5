$(document).ready(function () {
    //create event listener
    $(".saveBtn").on('click', function () {
        //create the values for local storage 
        var time = $(this).parent().attr('id');
        var value = $(this).siblings(".description").val();

        //save to local storage 
        localStorage.setItem(time, value);
    });

    function hours() {
        //use moment.js to get correct hours
        var currentHour = moment().hours();

        //loop the timeblocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);

            //check hour status
            if (blockHour < currentHour) {
                $(this).addClass("past");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }

        });
    }
    hours();

    //using timer to run hour function every 15000
    var interval = setInterval(hours, 15000);

    //retreive and load savded local storage 
    $('#hour-9 .description').val(localStorage.getItem("hour-9"));
    $('#hour-10 .description').val(localStorage.getItem("hour-10"));
    $('#hour-11 .description').val(localStorage.getItem("hour-11"));
    $('#hour-12 .description').val(localStorage.getItem("hour-12"));
    $('#hour-13 .description').val(localStorage.getItem("hour-13"));
    $('#hour-14 .description').val(localStorage.getItem("hour-14"));
    $('#hour-15 .description').val(localStorage.getItem("hour-15"));
    $('#hour-16 .description').val(localStorage.getItem("hour-16"));
    //replicate for the rest of the hours

    //display current day on page (moment.js)

    $("#currentDay").text(moment().format('dddd, MMMM Do'));



});
