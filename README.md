# NoCap Shows youtube-dl command

This is a script that generates the necessary `youtube-dl` command to download a live stream video from NoCap Shows, copies it to the clipboard and prints it to the browser console, so you can then paste it in your terminal.

The `youtube-dl` command for downloading videos from NoCap is:
```
youtube-dl --add-header Referer:"$URL" https://player.vimeo.com/video/$VIDEO_ID
```

## Instructions:

Go to [this repository's website](https://picandocodigo.github.io/nocap-downloader/) and drag the link you see to your Bookmarks toolbar.

Once logged in with your access code to the live stream, click on the bookmark to copy the `youtube-dl` command to the clipboard. You have to be logged in to know the right URL and get the proper video id from the embedded Vimeo iframe.

Support independent artists when you can :metal:

## Dependencies

* [youtube-dl](https://github.com/ytdl-org/youtube-dl)
