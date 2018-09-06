var peakname1 = "MOUNT EVEREST".split("");
var peakname2 = "KANCHENJUNGA".split("");
var peakname3 = "LHOTSE".split("");
var peakname4 = "MAKALU".split("");
var peakname5 = "CHO OYU".split("");
var peaknames = [peakname1, peakname2, peakname3, peakname4, peakname5];
var chancesleft = 8; //chances left to guess
var win = 0; //how many times you win
var Letterguessed = []; //display of letters guessed
var blank = []; //spaces for the word
var computerchoice = []; //whenever computer chooses the random word, it will split into a word of an array
var alphabetsonly = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ".split(
  ""
); //limit the users input only into letters and not numbers or ay other keys
//list all the html id's down to get it by element ID
var getwin = document.getElementById("win");
var getpickpeak = document.getElementById("pickpeak");
var getguessleft = document.getElementById("guessleft");
var getLettersguessed = document.getElementById("Lettersguessed");
var getresult = document.getElementById("result");

//innerHTML shows the text in HTML & textContent will show everything after the =
//since you already named the getElementById var only call it with variable name
getguessleft.innerHTML = chancesleft;

function randomComputerChoice() {
  //getresult.innerHTML=" ";
  //peaknames array is 0,1,2,3,4.
  //peaknames.length gives the length.
  //Math.random chooses the value randomly
  //Math.floor rounds down the number
  chancesleft = 8;
  Letterguessed = [];
  blank = [];
  computerchoice = peaknames[Math.floor(Math.random() * peaknames.length)];
  //for loop will check all the letters the word has and replace it with the blanks.
  //max conditions inside for loop is 3
  //push pushes the values inside an array
  for (var i = 0; i < computerchoice.length; i++) {
    if (computerchoice[i] === " ") {
      blank.push(" ");
    } else {
      blank.push("-");
    }
  }
  //join is a method that combines all the array values into a strings. opposite of split
  getpickpeak.innerHTML = blank.join("");
}

randomComputerChoice();

//userinput time
//indexof: a method to call the index of an array value. if array1 = [a,b,c] then array1.indexof(b)=1
document.onkeyup = function peakgame(event) {
  var userGuess = event.key.toUpperCase();
  if (alphabetsonly.indexOf(userGuess) > -1) {
    final(); //call the function
    function final() {
      // create the function
      if (computerchoice.indexOf(userGuess) > -1) {
        replaceblanks(); //call the function
      } else if (chancesleft > 0) {
        chancesleft--;
        Letterguessed.push(userGuess); //
      }
      getLettersguessed.innerHTML = Letterguessed;
    }
    function replaceblanks() {
      for (var i = 0; i < computerchoice.length; i++) {
        if (userGuess === computerchoice[i]) {
          blank[i] = userGuess;
          getpickpeak.innerHTML = blank.join("");
        }
      }
    }
    if (blank.indexOf("-") === -1) {
      // when user guessed all the letter correctly then the user is a winner and then the reset
      getresult.innerHTML = "You're a Winner!";
      win++;
      randomComputerChoice();
    }
    if (chancesleft === 0) {
      getresult.innerHTML = "You're a Loser!";
      win = 0;
      randomComputerChoice();
     }
    getwin.innerHTML = win;
    getguessleft.innerHTML = chancesleft;
  }
};
