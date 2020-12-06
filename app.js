var i=0;
var controller=0;

$(document).keypress(function(){
  if(i==0){
    i=1;
    gamescreen();
    // ques();
  }
}
);

var ans=0;
$("button").click(function(){
  if(controller==7 || i==4){
    if(i==4){
      $("h5").html("You won!");
      return;
    }
    else{
      $("h5").html("You lost!");
      return;
    }
  }
  controller=controller+1;

//  if($(this).attr("id")=='o3'){
    if($(this).text()=="Yes"&&usan==1 || $(this).text()=="No" && usan == 0){
    i=i+1;
    console.log("Correct!");
    gamescreen();
  }
  else{
    gamescreen();
  }
})

var operation=["+","-","*","/","%"];
var bttn=["o1","o2"];
var yn=["Yes","No"];
var usan;
var no1=0;
var no2=0;
var op;
function ques(){
   no1=Math.floor(Math.random() * 1000);
   no2=Math.floor(Math.random() * 1000);
   op=Math.floor(Math.random() * 4);
  switch(operation[op]){
    case "+":
       ans=no1+no2;
      break;
    case "-":
       ans=no1-no2;
      break;
    case "*":
       ans=no1*no2;
      break;
    case "/":
       ans=Math.floor(no1/no2);
      break;
    case "%":
       ans=no1%no2;
      break;
    default:
    console.log("Error in operation!");
  }

    //console.log(ans+1)



  checkans();

}

function gamescreen(){
  var s="";
  for(j=i;j<=4;j++){
    s=s+"_";
  }
  console.log(s);
  $("h1").html("I"+s+"F");
  checkpos();
  ques();
}

function checkpos(){
  if(i==5){
    console.log("I=F");
  }
};


function checkans()
{
  var ind=Math.floor(Math.random()*2);
  var ys=Math.floor(Math.random()*2);
  $("#"+bttn[ind]).html(yn[ys]);
  $("#"+bttn[1-ind]).html(yn[1-ys]);
  usan=Math.floor(Math.random()*2);
  if(usan){
    $("h2").html(no1+operation[op]+no2+"="+ans+" ?");
  }
  else{
    if(Math.floor(Math.random()*2)){
      var dis=Math.floor(Math.random() * (ans - (ans-300)) ) + (ans-300);
      $("h2").html(no1+operation[op]+no2+"="+dis+" ?");}
    else{
      var dis=Math.floor(Math.random() * (ans - (ans-300)) ) + (ans-300);
    $("h2").html(no1+operation[op]+no2+"="+dis+" ?");
}
  }

}
