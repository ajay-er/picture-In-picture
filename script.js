const videoElement = document.getElementById('video');

const button = document.getElementById('button');

//prompt to select media stream, pass to video element,then play
async function selectMediaStream() {
    try {
        
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();

        videoElement.srcObject = mediaStream;

        videoElement.onloadedmetadata = () => {
            
            videoElement.play();

        }

    } catch (error) {

        console.log('Oops,error:', error);
        
    }
}

button.addEventListener('click', async () => {

    //disable the button when we click on this
    button.disabled = true;

    //start picture in picture
    await videoElement.requestPictureInPicture();

    //reset the button
    button.disabled = false;

});


//On load
selectMediaStream();