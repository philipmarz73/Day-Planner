// 

$(document).ready(function(){
$("#currentDay").text(moment())

$(".saveBtn").on("click", function() {
    var time = $(this).parent().attr("id")
    console.log (time)

    var toDo = $(this).siblings(".description").val()
    console.log (toDo)
    localStorage.setItem(time, toDo);

  });

  function hourUpdate() {

    var currentHour = moment().hours();

    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour === currentHour) {
        $(this).addClass("present");
      }
      else if (blockHour < currentHour) {
        $(this).removeClass("present");
        $(this).addClass("past");

        else if (blockHour === currentHour)
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");





    })



    var interval = setInterval(hourUpdate, 30,000);
  }

})