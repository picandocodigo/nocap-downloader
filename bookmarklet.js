// Get the video id from the embedded iframe:
var frame = document.getElementsByTagName('iframe');
var url = frame[0].src
re = /video\/([0-9]+)/
video_id = re.exec(url)[1]
// Get the referer URL:
url = window.location.href

// Create an element to set the text, copy it and then remove it:
var text = document.createElement("input");
ytdl_command = `youtube-dl --add-header Referer:"${url}" https://player.vimeo.com/video/${video_id}`
text.value = ytdl_command
document.body.appendChild(text)
text.focus()
text.select()
document.execCommand('copy')
document.body.removeChild(text)
console.log(ytdl_command)
