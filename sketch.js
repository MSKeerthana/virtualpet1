//Create variables here
var dog, happyDog, database, foodS, foodStock;

var dogImg, happyDogImg;
function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png");

  happyDogImg = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();


  dog = createSprite(200,200, 20,20);
  dog.addImage(dogImg);

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);


}


function draw() {  
  background(46,139,87);
  // text("Press up arrow to feed", 100, 200);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  drawSprites();
  //add styles here

}

function readStock(data){
   foodS-data.val();
}

function writeStock(){
   
  database.ref('/').update({
    food : x
  })
}