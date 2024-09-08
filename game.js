var gamePattern=[];
var ButtonColours=["red","blue","green","yellow"];
  var userClickedPattern=[];

var level=-1;

var start=true;
$("body").keydown(function(){
  if (start===true){
    start=false;
    console.log("started");

    $("h1").text("level 0");
  nextSequence();





}
}
)


function nextSequence(){
  userClickedPattern=[];

  level++;
    $("h1").text("level  "+level);
  var randomNumber=Math.floor((Math.random())*4);
  var randomChosenColour=ButtonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).delay(100).fadeOut().fadeIn();
  playSound(randomChosenColour);



}

$(".btn").click(function(event){

  var userChosenColour=event.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);

   }

);


function checkAnswer(currentLevel){

 if (userClickedPattern[currentLevel]===gamePattern[currentLevel]){
   console.log("success");
   if (userClickedPattern.length==gamePattern.length){
     setTimeout(nextSequence(),1000);
   }
 }
 else {
   console.log("wrong");
   $("body").addClass("game-over");
   var wrong=new Audio("sounds/wrong.mp3");
   wrong.play();
   setTimeout(function(){
     $("body").removeClass("game-over");
   },200);
   $("h1").text("Game Over, Press Any Key to Restart");
   $("body").click(startOver());
   }
 }


function startOver() {
  level=0;
  gamePattern=[];
  start=true;

}





function playSound(name){
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}
function animatePress(currentColour){
  $("."+currentColour).addClass("pressed");
  setTimeout(function(){
    $("."+currentColour).removeClass("pressed");
  },1000)
}
