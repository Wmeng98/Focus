localStorage.setItem('reddit', 'reddit.com');
localStorage.setItem('facebook', 'facebook.com');
localStorage.setItem('tumblr', 'tumblr.com');
localStorage.setItem('twitter', 'twitter.com');
localStorage.setItem('youtube', 'youtube.com');
localStorage.setItem('distractify', 'distractify.com');
localStorage.setItem('9gag', '9gag.com');
localStorage.setItem('4chan', '4chan.com');
localStorage.setItem('amazon', 'amazon.com');
localStorage.setItem('netflix', 'netflix.com');
localStorage.setItem('imgur', 'imgur.com');




var i;
console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}


chrome.tabs.onUpdated.addListener(function(tabId, changedInfo, tab) {

  $.each(localStorage, function(key, value){
    var url = localStorage.getItem(localStorage.key(key));
    if (tab.url.match(url)) {
      chrome.tabs.update(tabId, {"url" : chrome.extension.getURL("block.html")}, function () {});
    }
  });
});


chrome.tabs.onCreated.addListener(function(tab) {
  $.each(localStorage, function(key, value){
      var url = localStorage.getItem(localStorage.key(key));
      if (tab.url.match(url)) {
        chrome.tabs.update(tabId, {"url" : chrome.extension.getURL("block.html")}, function () {});
      }
    });
    });
