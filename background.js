chrome.runtime.onInstalled.addListener(function() {
	  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'vk.com'},
        })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
});
});

chrome.commands.onCommand.addListener(function(command) {
	if(command == "scrollToNext") {
	    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  chrome.tabs.executeScript(
		      tabs[0].id,
		      {code: `scrollToNextRow();`});
		});	
	  }

	  if(command == "scrollToPrev") {
	    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		  chrome.tabs.executeScript(
		      tabs[0].id,
		      {code: `scrollToPrevRow();`});
		});	
	  }
});