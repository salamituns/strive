// get video element
const video = document.getElementById('video')

// function to hook webcam to video element
function startVideo() {
    navigator.getUserMedia(
        {video: {} },
        stream => video.scrObject = stream,
        err => console.error(err)
    )
}

startVideo()