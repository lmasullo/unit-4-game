$(document).ready(function(){
  // $("p").click(function(){
  //   $(this).hide();
  // });

  console.log("Connected!");
  let randNum = Math.floor((Math.random() * 120) + 19);
  let randNumCrystal = Math.floor((Math.random() * 12) + 1);

  $("#random").text(randNum);

});




