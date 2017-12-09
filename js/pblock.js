


$(document).ready(function () {

var blocklist = ["reddit.com", "facebook.com", "tumblr.com", "twitter.com", "youtube.com", "distractify.com", "9gag.com", "4chan.org", "amazon.com", "netflix.com", "imgur.com"];
var reference = ["reddit.com", "facebook.com", "tumblr.com", "twitter.com", "youtube.com", "distractify.com", "9gag.com", "4chan.org", "amazon.com", "netflix.com", "imgur.com"];

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
      blocklist[0] = "null";
      $("#site-0").css({"text-decoration": "line-through"})
    },

    function() {
      blocklist[0] = "reddit.com";
      $("#site-0").css({"text-decoration": "none"})
    });

$("#site-1").toggle(
  function() {
    blocklist[1] = "null";
    $("#site-1").css({"text-decoration": "line-through"})
  },

  function() {
    blocklist[1] = "facebook.com";
    $("#site-1").css({"text-decoration": "none"})
  });

$("#site-2").toggle(
  function() {
    blocklist[2] = "null";
    $("#site-2").css({"text-decoration": "line-through"})
  },

  function() {
    blocklist[2] =  "tumblr.com";
    $("#site-2").css({"text-decoration": "none"})
  });


$("#site-3").toggle(
  function() {
    blocklist[3] = "null";
    $("#site-3").css({"text-decoration": "line-through"})
  },

  function() {
    blocklist[3] = "twitter.com";
    $("#site-3").css({"text-decoration": "none"})
  });

$("#site-4").toggle(
  function() {
    blocklist[4] = "null";
    $("#site-4").css({"text-decoration": "line-through"})
  },

  function() {
    blocklist[4] = "youtube.com";
    $("#site-4").css({"text-decoration": "none"})
  });

$("#site-5").toggle(
  function() {
    blocklist[5] = "null";
    $("#site-5").css({"text-decoration": "line-through"})
  },

function() {
  blocklist[5] = "distractify.com";
  $("#site-5").css({"text-decoration": "none"})
});

$("#site-6").toggle(
  function() {
    blocklist[6] = "null";
    $("#site-6").css({"text-decoration": "line-through"})
  },

  function() {
    blocklist[6] = "9gag.com";
    $("#site-6").css({"text-decoration": "none"})
  });

$("#site-7").toggle(
  function() {
    blocklist[7] = "null";
    $("#site-7").css({"text-decoration": "line-through"})
  },

  function() {
    blocklist[7] = "4chan.org";
    $("#site-7").css({"text-decoration": "none"})
  });

$("#site-8").toggle(
  function() {
    blocklist[8] = "null";
    $("#site-8").css({"text-decoration": "line-through"})
  },

function() {
  blocklist[8] = "amazon.com";
  $("#site-8").css({"text-decoration": "none"})
});

$("#site-9").toggle(
  function() {
    blocklist[9] = "null";
    $("#site-9").css({"text-decoration": "line-through"})
  },

function() {
  blocklist[9] = "netflix.com";
  $("#site-9").css({"text-decoration": "none"})
});

$("#site-10").toggle(
  function() {
    blocklist[10] = "null";
    $("#site-10").css({"text-decoration": "line-through"})
  },

function() {
  blocklist[10] = "imgur.com";
  $("#site-10").css({"text-decoration": "none"})
});

// Jquery click action to clear all and add back all blocked sites

$("#click").toggle(
  function() {
    for (var i = 0; i < blocklist.length; i++) {
      blocklist[i] = "null";
      $("#site-"+i).css({"display" : "none"})
      document.getElementById("click").innerHTML = "Undo";
    }
  },

function() {
  for (var i = 0; i < blocklist.length; i++) {
    blocklist[i] = reference[i];
    $("#site-"+i).css({"display" : "block"})
    document.getElementById("click").innerHTML = "Clear";
  }
});














//background js
    //console.log(chrome.extension.getURL("block.html"));


    chrome.tabs.onUpdated.addListener(function(tabId, changedInfo, tab) {
      for (var i = 0; i < blocklist.length; i++) {
        console.log(tab.url);
        if (tab.url.match(blocklist[i])) {
          chrome.tabs.update(tabId, {"url" : chrome.extension.getURL("block.html")}, function () {});
        }
      }
    });

    chrome.tabs.onCreated.addListener(function(tab) {
      for (var i = 0; i < blocklist.length; i++) {
        console.log(tab.url);
        if (tab.url.match(blocklist[i])) {
          chrome.tabs.update(tabId, {"url" : chrome.extension.getURL("block.html")}, function () {});
        }
      }
    });




});
