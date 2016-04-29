//use strict because it's good practice
'use strict'
//initialise array in which to contain the quotes 
var quotes = [];

// add first quote as object in curly braces
quotes[0]= {quote: "Ignorance is the curse of God; knowledge is the wing wherewith we fly to heaven.",
            source: "William Shakespeare",
            citation: "Henri VI, Part 2",
            year: "1591",
            category: "Literature"};

// add second quote as object in curly braces
quotes[1]= {quote: "I saw spinning magnetic field, and induction motor. I saw them in the sun!",
            source: "Nikola Tesla",
            year: "1899",
            category: "Science"};

// add third quote as object in curly braces
quotes[2]= {quote: "Our labour preserves us from three great evils -- weariness, vice, and want.",
            source: "Voltaire",
            citation: "Candide",
            year: "1759",
            category: "Philosophy"};

// add forth quote as object in curly braces
quotes[3]= {quote: "Too much freedom can lead to the soul's decay.",
            source: "Prince",
            category: "Celebrity"};

// add fifth quote asobject in curly braces
quotes[4]= {quote: "You will not be punished for your anger, you will be punished by your anger.",
            source: "Buddha",
            category: "Philosophy"};

// add sixth quote as object in curly braces
quotes[5]= {quote: "If you can dream it, you can do it.",
            source: "Walt Disney"};

// add seventh quote as object in curly braces
quotes[6]= {quote: "Get you facts first, then you can distort them as you please",
            source: "Mark Twain",
            category: "Humour"};

// add eighth quote as object in curly braces
quotes[7]= {quote: "Never put a sock in a toaster",
            source: "Eddy Izzard",
            category: "Humour"};

// log quotes array to console for debugging purposes
console.log(quotes);
//Number of times that the printQuote needs to cycle through before all quotes are exhausted
var times = quotes.length
//Alternate global array in which to dump quotes objects that have already been used once
var quotesOther = [];

function getRandomQuote (a,b, number) {
  // is the alternate array full yet?
  if (b.length < number) {
    // pick random number based upon quote array element length
    var num = Math.floor(Math.random() * a.length);
    //kick it out of the quotes array and assign it to the name variable
    var qu = a.splice(num,1);
    // push qu variable into the alternate array
    b.push(qu[0]);
    //return quote object from the function, ensuring no duplication until all exhausted
    return qu[0];
  }
  // when the alternate array is full, when all quotes have been used once
  else {
    //pick random number based upon the length of alternate array, now full
    var numb = Math.floor(Math.random() * b.length);
    //assign quote to variable based upon random number selection
    var qub = b[numb];
    // return quote (as all quotes have been displayed once by this point, duplication does not matter)
    return qub;
  }
};


// define printQuote anonymous function
function printQuote () {
  //using the getRandomQuote function we get a random quote object from the quotes array, all exhausted once before repeating
  var randomQuote = getRandomQuote(quotes, quotesOther, times);
  //console log for debugging purposes
  console.log(quotes);
  //console log for debugging purposes
  console.log(quotesOther);
  //we then construct an html statement from string text and the quote object, starting with quote and source
  var quoteString = "<p class='quote'>";
  quoteString += randomQuote.quote;
  quoteString += "</p> <p class='source'>";
  quoteString += randomQuote.source;
  //citation is an optional field so the html text will only be added if the citation field is present
  if (typeof randomQuote.citation != "undefined") {
    quoteString += "<span class='citation'>";
    quoteString += randomQuote.citation;
    quoteString += "</span>";
  };
  //year is an optional field so the html text will only be added if the citation field is present
  if (typeof randomQuote.year != "undefined") {
    quoteString += "<span class='year'>";
    quoteString += randomQuote.year;
    quoteString += "</span>";
  };
  //category is an additional optional field so the html text will only be added if the citation field is present
  if (typeof randomQuote.category != "undefined") {
    quoteString += "<span class='category'>";
    quoteString += randomQuote.category;
    quoteString += "</span>";
  };
  quoteString += "</p>"
  //insert the constructed html string into the document
  document.getElementById('quote-box').innerHTML = quoteString;
  //random colour generator for body background colour
    function getRandomColourBackground() {
      //create array of HEXADECIMAL characters
      var hexadecscale = '0123456789ABCDEF'.split('');
      // initialize hexadecimal string
      var hexadec = '#';
      var i = 0;
      while (i<6) {
        //pick a hexadecimal character and add it to the hexadec string
        hexadec += hexadecscale[Math.floor(Math.random() * 16)];
        i += 1;
      }
      //console.log colour to ensure that it's working
        console.log(hexadec);
      //set body background colour
        document.body.style.backgroundColor = hexadec;
      }
      //random colour generator for button background colour because it looks better
      function getRandomColourButton() {
        //create array of HEXADECIMAL characters
        var hexadecscale = '0123456789ABCDEF'.split('');
        // initialize hexadecimal string
        var hexadec = '#';
        var i = 0;
        while (i<6) {
          //pick a hexadecimal character and add it to the hexadec string
          hexadec += hexadecscale[Math.floor(Math.random() * 16)];
          i += 1;
        }
        //console.log colour to ensure that it's working
        console.log(hexadec);
        //set button background colour
        document.getElementById("loadQuote").style.backgroundColor = hexadec;
      }
      //callfunction
      getRandomColourBackground();
      //callfunction
      getRandomColourButton();
}

//call printQuote function upon initial page load
printQuote();
// call function after set interval of time (10 seconds)
setInterval('printQuote()', 10000);
//unobstrusive JS Event Listener for the button click to execute printQuote, keeping an onclick statement out of the html
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
