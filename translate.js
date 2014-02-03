//copyright
//
//

chrome.contextMenus.create({
	"title": "Translate %s with dict.cn",
	"type": "normal",
	"contexts": ["selection"],
	"onclick": onClickHandler
});

function onClickHandler(info) {
	var url = "http://www.dict.cn/" + info.selectionText;
	chrome.tabs.create({ url: url, active: true });
};
