var canvas = document.querySelector('canvas');
var gameLoadingPermission = document.querySelector('.gameLoadingPermission');
var gameTruePermission = document.querySelector('.gameTruePermission');


navigator.mediaDevices.getUserMedia({video: true})
.then(function (mediaStream) {
       const video = document.querySelector('#video');
    video.srcObject = mediaStream;
    video.play();
  })
.catch(function (err) {
    console.log('Não há permissões para acessar a webcam')
})
document.querySelector('#capture').addEventListener('click', function (e) {
    var canvas = document.querySelector("#canvas");  
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0)
})


function modelReady() {
  gameLoadingPermission.style.display = 'none';
  video.style.display = 'inline-block';
  gameTruePermission.style.display = 'flex';
}










