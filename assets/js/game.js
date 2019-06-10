// Make sure the document is loaded before running jQuery
$(document).ready(() => {
  // Make sure we are connected
  console.log('Connected!');

  //Reset the game
  function reset(){
    // Get the initial random numbers
    randRet = rand();

    //Reset the total score
    let totScore = 0;
    $('#scoreVal').text(totScore);
  }

  // Get the random numbers
  function rand() {
    // Get the random numbers, add them to an object and return
    const objRand = {
      randNum: Math.floor(Math.random() * 120 + 19),
      randNumBlue: Math.floor(Math.random() * 12 + 1),
      randNumGreen: Math.floor(Math.random() * 12 + 1),
      randNumYellow: Math.floor(Math.random() * 12 + 1),
      randNumRed: Math.floor(Math.random() * 12 + 1),
    };
    // console.log(objRand);

    // Put the game's random number in the div
    $('#random').text(objRand.randNum);

    return objRand;
  }//End rand

  function incScore(value) {
    totScore += value;
    //console.log(totScore);

    // Put the cumulative total score in the div
    $('#scoreVal').text(totScore);

    //Convert to a number
    let scoreInt = Number($('#scoreVal').text());

    console.log(scoreInt);

    if (scoreInt === randRet.randNum) {
      console.log("Win!!!!!!");
      //Display Win Message
      $('#message').text('You Win!!');

      //Increment the wins and display
      wins = wins += 1;
      $('#wins').text(wins);

      //Reset the game
      reset();

    }else if (scoreInt > randRet.randNum){
      console.log("Lose!!!!!!");

      //Display Loss Message
      $('#message').text('You Lose!!');

      //Increment the losses and display
      losses = losses += 1;
      $('#losses').text(losses);

      //Reset the game
      reset();

    }//End check score against random number
  }//End intScore

  // Set the initial score
  let totScore = 0;
  $('#scoreVal').text(totScore);

  // Set the initial wins
  let wins = 0;
  $('#wins').text(wins);

  // Set the initial losses
  let losses = 0;
  $('#losses').text(losses);

  // Get the initial random numbers
  let randRet = rand();

  // Click the blue crystal
  $('#blue').click(() => {
    console.log(`Blue's value is: ${randRet.randNumBlue}`);
    incScore(randRet.randNumBlue);
  });

  // Click the gree crystal
  $('#green').click(() => {
    console.log(`Green's value is: ${randRet.randNumGreen}`);
    incScore(randRet.randNumGreen);
  });

  // Click the yellow crystal
  $('#yellow').click(() => {
    console.log(`Yellow's value is: ${randRet.randNumYellow}`);
    incScore(randRet.randNumYellow);
  });

  // Click the red crystal
  $('#red').click(() => {
    console.log(`Red's value is: ${randRet.randNumRed}`);
    incScore(randRet.randNumRed);
  });
});
