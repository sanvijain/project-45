const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas;
var backgroundImg;
var goti1;

function preload(){
  backgroundImg = loadImage("background.png");
}

function setup(){
  canvas = createCanvas(1000,650);

  engine = Engine.create();
	world = engine.world;

  goti1 = new Goti(500,320,20);
 

}

function draw(){
  background(backgroundImg);

 // drawSprites();

  goti1.display();
}