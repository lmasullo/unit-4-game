// Make sure the document is loaded before running jQuery
$(document).ready(() => {
  // Make sure we are connected
  console.log('Connected!');

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
    return objRand;
  }

  function incScore(value) {
    totScore += value;
    console.log(totScore);

    return totScore;
  }

  // Set the initial score
  let totScore = 0;

  // Get the initial random numbers
  const randRet = rand();

  console.log(randRet);

  // Put the game's random number in the div
  $('#random').text(randRet.randNum);

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
