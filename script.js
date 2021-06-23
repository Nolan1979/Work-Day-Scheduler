const timeDateInterval = setInterval(function () {
    var timeDate = moment();
    $("#currentDay").text(timeDate.format('MMMM Do, YYYY h:mm:ss a'));
}, 1000);

function timeBlockColor() {

    var currentHour = moment().hour();
    console.log(currentHour)

    $('.time-block').each(function () {
        var timeBlock = parseInt($(this).attr("id").slice(4));
        console.log(timeBlock)


        if (timeBlock < currentHour) {
            $(this).addClass("past");

        } else if (timeBlock === currentHour) {
            
            $(this).addClass("present");

        } else {

            $(this).addClass("future");
            console.log(this)
        }
    })
};




$(".saveBtn").on('click', function () {
    var key = $(this).parent().attr('id');
    var value = $(this).siblings('.text').val();

    localStorage.setItem(key, value)
});

$("#hour9 .text").val(localStorage.getItem('hour9'));
$("#hour10 .text").val(localStorage.getItem('hour10'));
$("#hour11 .text").val(localStorage.getItem('hour11'));
$("#hour12 .text").val(localStorage.getItem('hour12'));
$("#hour13 .text").val(localStorage.getItem('hour13'));
$("#hour14 .text").val(localStorage.getItem('hour14'));
$("#hour15 .text").val(localStorage.getItem('hour15'));
$("#hour16 .text").val(localStorage.getItem('hour16'));
$("#hour17 .text").val(localStorage.getItem('hour17'));


timeBlockColor();








