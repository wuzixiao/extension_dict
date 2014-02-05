chrome.contextMenus.create({
	"title": "Translate This",
	"type": "normal",
	"contexts": ["selection"],
	"onclick": onClickHandler
});


function onClickHandler(info) {
	var str = info.selectionText;
	var reg=/^[a-z]*$/gi;

	if(reg.test(str)) { 
		var url = "http://www.dict.cn/" + str;
	}
	else {
		var url = "http://translate.google.com/#auto/zh-CN/" + str;
	}

	chrome.tabs.create({ url: url, active: true });
};
