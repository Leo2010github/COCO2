var video1 = "";
var Video2 = "";
var Estatus = "";
var Objetos = [];
function preload(){
    video1 = createVideo("WO.mp4");
    video1.hide();
//    Video2 = createVideo("video2Leo.mp4");
}
function setup(){
    Lienzo = createCanvas(1150, 450);
}
function draw(){
    image(video1, 0, 0, 1150, 450);
    if (Estatus != "") {
        Modelo.detect(video1, resultados);
        for (let u = 0; u < Objetos.length; u++) {
            document.getElementById("Estatus").innerHTML = "Objetos Detectados"
            document.getElementById("Objetos").innerHTML = "Objetos detectados: " + Objetos.length;
            fill("red");
            noFill();
            rect(Objetos[u].x, Objetos[u].y, Objetos[u].width, Objetos[u].height);
            fill("red");
            textSize(50);
            Precision = Math.floor(Objetos[u].confidence * 100);
            text(Objetos[u].label + Precision + "%", Objetos[u].x + 30, Objetos[u].y + 30);
        }
    }
}
function Iniciar(){
    Modelo = ml5.objectDetector("cocossd", Holllllllaaa);
    document.getElementById("Estatus").innerHTML = "Detectando Objetos =D";
}
function Holllllllaaa(){
    console.log("DV,RHBKDFJBV");
    Estatus = true;
    video1.loop();
    video1.volume(0);
    video1.speed(0.5);
}
function resultados(Wa, We){
    if(Wa){
        console.error(Wa);
    }
    else{
        console.log(We);
        Objetos = We;
    }
}