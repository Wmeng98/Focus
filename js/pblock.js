$(document).ready(function () {

var blocklist = ["reddit.com", "facebook.com", "tumblr.com", "twitter.com", "youtube.com", "distractify.com", "9gag.com", "4chan.org", "amazon.com", "netflix.com", "imgur.com"];
var blocksite = ["reddit", "facebook", "tumblr", "twitter", "youtube", "distractify", "9gag", "4chan", "amazon", "netflix", "imgur"];

// bug fix is to store in local storage key url and value array of blocked site domains to be more user-agent friendly...
function showList () {
  var i = 0;
  for (i; i < blocklist.length; i++) {
      $("#blocklist").append("<div class='togglelink' id='site-"+ i +"'>" + blocklist[i] + "</div>");
  }
}

// initial view
showList();



// option clear all from list and add back functions
$("#site-0").toggle(
    function() {
      localStorage.removeItem("reddit");
      $("#site-0").css({"text-decoration": "line-through"})
    },

    function() {
      localStorage.setItem('reddit', 'reddit.com');
      $("#site-0").css({"text-decoration": "none"})
    });

$("#site-1").toggle(
  function() {
    localStorage.removeItem("facebook");
    $("#site-1").css({"text-decoration": "line-through"})
  },

  function() {
    localStorage.setItem('facebook', 'facebook.com');
    $("#site-1").css({"text-decoration": "none"})
  });

$("#site-2").toggle(
  function() {
    localStorage.removeItem("tumblr");
    $("#site-2").css({"text-decoration": "line-through"})
  },

  function() {
    localStorage.setItem('tumblr', 'tumblr.com');
    $("#site-2").css({"text-decoration": "none"})
  });


$("#site-3").toggle(
  function() {
    localStorage.removeItem("twitter");
    $("#site-3").css({"text-decoration": "line-through"})
  },

  function() {
    localStorage.setItem('twitter', 'twitter.com');
    $("#site-3").css({"text-decoration": "none"})
  });

$("#site-4").toggle(
  function() {
    localStorage.removeItem("youtube");
    $("#site-4").css({"text-decoration": "line-through"})
  },

  function() {
    localStorage.setItem('youtube', 'youtube.com');
    $("#site-4").css({"text-decoration": "none"})
  });

$("#site-5").toggle(
  function() {
    localStorage.removeItem("distractify");
    $("#site-5").css({"text-decoration": "line-through"})
  },

function() {
  localStorage.setItem('distractify', 'distractify.com');
  $("#site-5").css({"text-decoration": "none"})
});

$("#site-6").toggle(
  function() {
    localStorage.removeItem("9gag");
    $("#site-6").css({"text-decoration": "line-through"})
  },

  function() {
    localStorage.setItem('9gag', '9gag.com');
    $("#site-6").css({"text-decoration": "none"})
  });

$("#site-7").toggle(
  function() {
    localStorage.removeItem("4chan");
    $("#site-7").css({"text-decoration": "line-through"})
  },

  function() {
    localStorage.setItem('4chan', '4chan.com');
    $("#site-7").css({"text-decoration": "none"})
  });

$("#site-8").toggle(
  function() {
    localStorage.removeItem("amazon");
    $("#site-8").css({"text-decoration": "line-through"})
  },

function() {
  localStorage.setItem('amazon', 'amazon.com');
  $("#site-8").css({"text-decoration": "none"})
});

$("#site-9").toggle(
  function() {
    localStorage.removeItem("netflix");
    $("#site-9").css({"text-decoration": "line-through"})
  },

function() {
  localStorage.setItem('netflix', 'netflix.com');
  $("#site-9").css({"text-decoration": "none"})
});

$("#site-10").toggle(
  function() {
    localStorage.removeItem("imgur");
    $("#site-10").css({"text-decoration": "line-through"})
  },

function() {
  localStorage.setItem('imgur', 'imgur.com');
  $("#site-10").css({"text-decoration": "none"})
});

// Jquery click action to clear all and add back all blocked sites

$("#click").toggle(
  function() {
    for (var i = 0; i < blocklist.length; i++)   {
        localStorage.removeItem(blocksite[i]);
        $("#site-"+i).css({"display" : "none"});
        document.getElementById("click").innerHTML = "Undo";
    }
  },

function() {
  for (var i = 0; i < blocklist.length; i++) {

    localStorage.setItem(blocksite[i], blocklist[i]);

    $("#site-"+i).css({"display" : "block"});
    document.getElementById("click").innerHTML = "Clear";
  }
});






});
