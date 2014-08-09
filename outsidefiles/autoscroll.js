function RecentPostsScrollerv2(json) {
	var sHeadLines;
	var sPostURL;
	var objPost;
	var sMoqueeHTMLStart;
	var sMoqueeHTMLEnd;
	var sHeadlineTerminator;
	var sPostLinkLocation;

	try {
		sMoqueeHTMLStart = "\<MARQUEE behavior=\"scroll\" onmouseover=\"this.stop();\" onmouseout=\"this.start();\" ";

		if (nWidth) {
			sMoqueeHTMLStart = sMoqueeHTMLStart + " width = \"" + nWidth + "%\"";
		} else {
			sMoqueeHTMLStart = sMoqueeHTMLStart + " width = \"100%\"";
		}
		if (nScrollDelay) {
			sMoqueeHTMLStart = sMoqueeHTMLStart + " scrolldelay = \"" + nScrollDelay + "\"";
		}
		if (sDirection) {
			sMoqueeHTMLStart = sMoqueeHTMLStart + " direction = \"" + sDirection + "\"\>";

			if (sDirection == "left" || sDirection == "right") {
				sHeadlineTerminator = "&nbsp;&nbsp;";
			} else {
				sHeadlineTerminator = "\<br/\>";
			}
		}
		if (sOpenLinkLocation == "N") {
			sPostLinkLocation = " target= \"_blank\" ";
		} else {
			sPostLinkLocation = " ";
		}
		sMoqueeHTMLEnd = "\</MARQUEE\>"

		sHeadLines = "";

		for (var nFeedCounter = 0; nFeedCounter < nMaxPosts; nFeedCounter++) {
			var objPost = json.feed.entry[nFeedCounter];

			if (nFeedCounter == json.feed.entry.length) break;

			for (var nCounter = 0; nCounter < objPost.link.length; nCounter++) {
				if (objPost.link[nCounter].rel == 'alternate') {
					sPostURL = objPost.link[nCounter].href;
					break;
				}
			}
			sHeadLines = sHeadLines + "\<b\>" + sBulletChar + "\</b\> \<a " + sPostLinkLocation + " href=\"" + sPostURL + "\">" + objPost.title.$t + "\</a\>" + sHeadlineTerminator;
		}
		

		if (sDirection == "left") {
			sHeadLines = sHeadLines + "&nbsp;&nbsp;";
		} else if (sDirection == "right") {
			sHeadLines = "&nbsp;&nbsp;" + sHeadLines;
		} else if (sDirection == "up") {
			sHeadLines = sHeadLines + "\<br/\>";
		} else {
			sHeadLines =  "\<br/\>" + sHeadLines;
		}
		document.write(sMoqueeHTMLStart + sHeadLines + sMoqueeHTMLEnd)
	} catch (exception) {
		alert(exception);
	}
}