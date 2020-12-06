var i=0;
var controller=0;

$(document).keypress(function(){
  if(i==0){
    i=1;
    $(".start").removeClass("start").addClass("done");
    $("#point").addClass("done");
    $("#math").removeClass("done");
    $("#maths").removeClass("done");
    gamescreen();
    // ques();
  }
}
);

var ans=0;
$("button").click(function(){
  if(controller==7 || i==5){
    if(i==5){
      $("#maths").addClass("done2");
      $(".end").removeClass("done").html("You won!");
      return;
    }
    else{
      $("#maths").addClass("done2");
      $(".end").removeClass("done").html("You lost!");
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
  for(j=4;j>=i;j--){
    s=s+"------";
  }
  console.log(s);
  $("#line").html("<img src='rod.png' class='rod'><span style='color:red;'>"+s+"</span> <img src='sharkee.png' class='fish'>");

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
