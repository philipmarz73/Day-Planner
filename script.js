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
    })



    var interval = setInterval(hourUpdate, 30,000);
  }

})