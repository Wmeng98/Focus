

$(document).ready(function () {
  var start = 0;
  var count1 = 0;



document.getElementById("options-btn").addEventListener("click", function () {
  chrome.runtime.openOptionsPage();
});



document.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    var counter = $("#count").text();
    var counter_int = parseInt(counter);
    count1 = counter_int;
    ++start;
   }
 }, false);


 document.addEventListener("click", function(){
    var counter = $("#count").text();

    var counter_int = parseInt(counter);
    count1 = counter_int;
    if (count1 > 0) {
      start++;
    }
    if (start) {
      if (count1 === 0) {
        setTimeout(function() { alert("Congratulaions, feel free to clear your list of Blocked Sites!"); }, 300);
        start = 0;
      }
    }
  });



});
