$(document).ready(function () {

var blocklist = ["focusUrlreddit", "focusUrlfacebook", "focusUrltumblr", "focusUrltwitter", "focusUrlyoutube", "focusUrldistractify", "focusUrl9gag", "focusUrl4chan", "focusUrlamazon", "focusUrlnetflix", "focusUrlimgur"];
var blocksite = ["reddit", "facebook", "tumblr", "twitter", "youtube", "distractify", "9gag", "4chan", "amazon", "netflix", "imgur"];

function consoleArr() {
var i;
console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
  }
}


// calc number of blocked url items currently in local storage
function focusLen () {
  var arr = [];

  for (var i = 0; i < localStorage.length; i++) {
    var item = localStorage.key(i);

    if ($.type(item) === "string") {
      if (item.substr(0,8) === "focusUrl") {
        arr.push(localStorage.getItem(item));
      }
    }
  }
  return arr;
}



function showList () {
  //first need to clear preceding list so that we can update the showList
  $("#blocklist").children().remove();
  var urlArray = focusLen();


  var i = 0;
  for (i; i < urlArray.length; i++) {
      $("#blocklist").append("<div class='togglelink' id='site-"+ i +"'>" + urlArray[i] + "</div>");
  }
}

// Initial
showList();
//



function addSite(site) {
  if((site.substr(site.length - 4) === ".com")||
  (site.substr(site.length - 4) === ".org")||
  (site.substr(site.length - 4) === ".net")||
  (site.substr(site.length - 4) === ".int")||
  (site.substr(site.length - 4) === ".edu")||
  (site.substr(site.length - 4) === ".gov")||
  (site.substr(site.length - 4) === ".mil") && (site != "chrome://extensions/")) {


    localStorage.setItem("focusUrl" + site, site);
    showList();

  }
}


// store flagged items in an array, then at the end loop through and remove all flagged, that way not removing as indexing
function removeAll () {
  var localLen = localStorage.length;
  var del = [];
  var i = 0;
  while (i < localLen) {
    var item = localStorage.key(i);

    if ($.type(item) === "string") { // just because .key is user agent dependent so need to be careful
      if (item.substr(0,8) === "focusUrl") {
        del.push(item);
      }
    }
    i++;
  }
  for (var  i = 0; i < del.length; i++) {
    localStorage.removeItem(del[i]);
  }
}
// jQuery to detect if user clicked Clear, don't want to delete the url item, just clear the contents on the array value
$("#click").click(function() {
  removeAll();
  showList();
});


// jQueryto detect if user adds another site to be blocked
$("#blockbutton").click(function() {
  var add = $("#blacklist").val();
  addSite(add);
  showList();
});


//add back original defualt blocked sites to localStorage when user clicks
$("#clickDefault").click(function() {
  removeAll();

  for (var i = 0; i < blocklist.length; i++) {
    if (blocklist[i].substr(8) === "4chan") {
      localStorage.setItem(blocklist[i], blocklist[i].substr(8) + ".org");
      continue;
    }
    localStorage.setItem(blocklist[i], blocklist[i].substr(8) + ".com");
  }
  showList();
});




});
