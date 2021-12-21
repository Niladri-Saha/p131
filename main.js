img1="";
img2="";
img3="";
img4="";
img5="";
status1="";
objects=[];
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML="Status : Detecting Objects";
}
function preload(){
    img1=loadImage("chocolate_cake.jpg");
    img2=loadImage("lion.jpg");
    img3=loadImage("mango.jpg");
    img4=loadImage("sunflower.jpg");
    img5=loadImage("tree.jpg"); 
}
function draw(){
    image(img,0,0,640,420);
    if(status1 != ""){
        for ( i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML="status : Object Detected";
            fill("#ff0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%", objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#ff9900");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
function modelLoaded(){
    console.log("Model is loaded");
    status1=true;
    objectDetector.detect(img,gotResult)
}
function gotResult(error,results){
if (error){
    console.log(error);
}
console.log(results);
objects=results;
}
