
$(document).ready( function () {


  //Storage SM
  //blocklist
  //globally declared SM and PB objects
  var SM = (function () {
      // first clear local storage

      var my = {};

      my.get = function (key) {
          return localStorage.getItem(key);
      }
      my.put = function (key, value) {
          return localStorage.setItem(key, value);
      }
      my.delete = function (key) {
          return localStorage.removeItem(key);
      }

      return my;

  }());

  //global variable to mutate to determine current # of blocked blockedSites


  var PB = (function (SM) {
      var my = {};



      my.getBSites = function () {
          return JSON.parse(SM.get("blocklist"));
      }

      my.setLOTR = function (value) {
          var prot = /^http|chrome-extension/i;
          if (value.match(prot)) {
              SM.put("block", value);
          } else {
              SM.put("block", "http://" + value);
          }
          return SM.get("block");
      }

      my.getLOTR = function () {
          return SM.get("block");
      }

      my.addBSite = function (site) {
        if((site.substr(site.length - 4) === ".com")||
        (site.substr(site.length - 4) === ".org")||
        (site.substr(site.length - 4) === ".net")||
        (site.substr(site.length - 4) === ".int")||
        (site.substr(site.length - 4) === ".edu")||
        (site.substr(site.length - 4) === ".gov")||
        (site.substr(site.length - 4) === ".mil") && (site != "chrome://extensions/")) {


          my.blockedSites = JSON.parse(SM.get("blocklist"));
          console.log(my.blockedSites);
          my.blockedSites[site] = "success";
          console.log(my.blockedSites);
          SM.put("blocklist", JSON.stringify(my.blockedSites));
        }
      }

      my.removeBSite = function (site) {
          my.blockedSites = JSON.parse(SM.get("blocklist"));
          delete my.blockedSites[site];
          SM.put("blocklist", JSON.stringify(my.blockedSites));
      }

      return my;
  }(SM));



// options js


    $("#blockbutton").click(function () {
        PB.addBSite($("#blacklist").val());

        showBList();
    });
    if (PB.getLOTR() != chrome.extension.getURL("block.html")) {
        $("#watchthatinstead").text(PB.getLOTR());
    }
    showBList();

function showBList () {
    $("#blocklist").children().remove();
    var i=1;


    $.each(PB.getBSites(), function (index, value) {
        $("#blocklist").append("<div id='site-"+i+"'>" + index + "</div>");
        i++;
    });
}

// JS function to remove all Blocked sites when all tasks in the todo list have been completed
// use an event listener to check if key completed has a false value of zero, then execute function...

//remove all blocked sites if reset to do

$("#click").click(function () {
  $.each(PB.getBSites(), function (index, value) {
          PB.removeBSite(index);
          showBList();
  });
});
$("#test").click(function () {
  $.each(PB.getBSites(), function (index, value) {
          PB.removeBSite(index);
          showBList();
  });
});

/*function removeAllSites() {
  var i = 1;
  assert("hi");
  $.each(PB.getBSites(), function (index, value) {
      $("#unblock-"+i).click(function () {
          PB.removeBSite(index);
          showBList();
      });
      i++;
  });
}

$.each(PB.getBSites(), function (index, value) {
    $("#blocklist").append("<div id='site-"+i+"'><input type='button' id='unblock-"+i+"' value='REMOVE' /> " + index+"</div>");
    $("#unblock-"+i).click(function () {
        PB.removeBSite(index);
        showBList();
    });
    i++;
});
*/
/*$.each(PB.getBSites(), function (index, value) {
    $("#blocklist").append("<div id='site-"+i+"'><input type='button' id='unblock-"+i+"' value='REMOVE' /> " + index+"</div>");
    $("#unblock-"+i).click(function () {
        PB.removeBSite(index);
        showBList();
    });
    i++;
});*/

//



//background js
    if (!PB.getLOTR()) {
        PB.setLOTR(chrome.extension.getURL("block.html"));
    }

    chrome.tabs.onUpdated.addListener(function(tabId, changedInfo, tab) {
        for (site in PB.getBSites()) {
            if (tab.url.match(site)) {
                chrome.tabs.update(tabId, {"url" : PB.getLOTR()}, function () {});
            }
        }
    });

    chrome.tabs.onCreated.addListener(function(tab) {
        for (site in PB.getBSites()) {
            if (tab.url.match(site)) {
                chrome.tabs.update(tab.id, {"url" : PB.getLOTR()}, function () {});
            }
        }
    });


});
