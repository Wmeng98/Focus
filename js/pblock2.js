
var blocklist = ["reddit.com", "facebook.com", "tumblr.com", "twitter.com", "youtube.com", "distractify.com", "9gag.com", "4chan.org", "amazon.com", "netflix.com", "imgur.com"];

localStorage.setItem('focusUrlreddit', 'reddit.com');
localStorage.setItem('focusUrlfacebook', 'facebook.com');
localStorage.setItem('focusUrltumblr', 'tumblr.com');
localStorage.setItem('focusUrltwitter', 'twitter.com');
localStorage.setItem('focusUrlyoutube', 'youtube.com');
localStorage.setItem('focusUrldistractify', 'distractify.com');
localStorage.setItem('focusUrl9gag', '9gag.com');
localStorage.setItem('focusUrl4chan', '4chan.org');
localStorage.setItem('focusUrlamazon', 'amazon.com');
localStorage.setItem('focusUrlnetflix', 'netflix.com');
localStorage.setItem('focusUrlimgur', 'imgur.com');




var i;
console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}




chrome.tabs.onUpdated.addListener(function(tabId, changedInfo, tab) {
  for (var i = 0; i < localStorage.length; i++) {
    var item = localStorage.key(i);
    // start at 8 because every url key for the focus chrome app will have an obligatory focusUrl identifier string attatched to it for organizational purposes
    if ($.type(item) === "string") {
      if (item.substr(0,8) === "focusUrl") {
        if (tab.url.match(item.substr(8))) {
          chrome.tabs.update(tabId, {"url" : chrome.extension.getURL("block.html")}, function () {});
          break;
        }
      }
    }
  }

});


chrome.tabs.onCreated.addListener(function(tab) {
  for (var i = 0; i < localStorage.length; i++) {
    var item = localStorage.key(i);
    // start at 8 because every url key for the focus chrome app will have an obligatory focusUrl identifier string attatched to it for organizational purposes
    if ($.type(item) === "string") {
      if (item.substr(0,8) === "focusUrl") {
        if (tab.url.match(item.substr(8))) {
          chrome.tabs.update(tabId, {"url" : chrome.extension.getURL("block.html")}, function () {});
          break;
        }
      }
    }
  }

});
