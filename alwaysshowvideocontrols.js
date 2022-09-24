function updateVideoTagToShowControls() {
    var video_tags = document.getElementsByTagName("video");
    for (var i = 0; i < video_tags.length; i++) {
        var needs_update = false;
        if (video_tags[i].getAttribute("controls") == null) {
            needs_update = true;
        } else if (video_tags[i].getAttribute("controls") == "false") {
            needs_update = true;
        }
        if (video_tags[i].hasAttribute("src")) {
            if (!video_tags[i].getAttribute("src") == "") {
                needs_update = false;
            }
        }
        if (needs_update) {
            video_tags[i].setAttribute("controls", "true");
        }
    }
}
setInterval(updateVideoTagToShowControls, 1000);
