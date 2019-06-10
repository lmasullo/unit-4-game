// Make sure the document is loaded before running jQuery
$(document).ready(() => {
  // Make sure we are connected
  console.log('Connected!');
  const randNum = Math.floor(Math.random() * 120 + 19);
  const randNumBlue = Math.floor(Math.random() * 12 + 1);
  const randNumGreen = Math.floor(Math.random() * 12 + 1);
  const randNumYellow = Math.floor(Math.random() * 12 + 1);
  const randNumRed = Math.floor(Math.random() * 12 + 1);

  $('#random').text(randNum);
});
