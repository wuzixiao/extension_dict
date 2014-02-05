//copyright
//
//

chrome.contextMenus.create({
	"title": "Translate %s with dict.cn",
	"type": "normal",
	"contexts": ["selection"],
	"onclick": onClickHandler
});

chrome.contextMenus.create({
	"title": "Translate with google",
	"type": "normal",
	"contexts": ["selection"],
	"onclick": onClickHandler2
});


function onClickHandler(info) {
	var url = "http://www.dict.cn/" + info.selectionText;
	chrome.tabs.create({ url: url, active: true });
};
function onClickHandler2(info) {
	var url = "http://translate.google.com/#auto/zh-CN/" + info.selectionText;
	chrome.tabs.create({ url: url, active: true });
};
