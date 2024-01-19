



function preload(){

}

function setup(){
    video = createCapture(VIDEO).hide;
    video.size(550, 500);
  
  
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
  
}
function draw(){
    image(video, 0, 0, 300, 300)
}