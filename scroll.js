function findRowPos(obj) {
	var curtop = 0;
	if (obj.offsetParent) {
		do {
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
		return [curtop];
	}
};

function scrollToNextRow() {
	var curPos = document.documentElement.scrollTop || document.body.scrollTop;
	var headerOffset = document.getElementById('page_header').offsetHeight;
	var rows = document.getElementsByClassName("feed_row");
	if (rows.length == 0) {
		rows = document.getElementsByClassName("_post_content");
	}
	for (var i = 0; i < rows.length; i++) {
		if (rows[i].clientHeight == 0 || rows[i].classList.length > 1) {
			continue;
		}
		var rowPos = findRowPos(rows[i]);
		if (rowPos > curPos + headerOffset) {
			window.scrollTo(0, rowPos - headerOffset);
			break;
		}
	}
};

function scrollToPrevRow() {
	var curPos = document.documentElement.scrollTop || document.body.scrollTop;
	var headerOffset = document.getElementById('page_header').offsetHeight;
	var rows = document.getElementsByClassName("feed_row");
	if (rows.length == 0) {
		rows = document.getElementsByClassName("_post_content");
	}
	for (var i = rows.length - 1; i >= 0; i--) {
		if (rows[i].clientHeight == 0 || rows[i].classList.length > 1) {
			continue;
		}
		var rowPos = findRowPos(rows[i]);
		if (rowPos < curPos + headerOffset) {
			window.scrollTo(0, rowPos - headerOffset);
			break;
		}
	}
};