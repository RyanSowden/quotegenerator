let quote = [ "Life isn’t about getting and having, it’s about giving and being. -Kevin Kruse", "Whatever the mind of man can conceive and believe, it can achieve. -Napoleon Hill", "Strive not to be a success, but rather to be of value. -Albert Einstein", "I attribute my success to this: I never gave or took any excuse. -Florence Nightingale", "You miss 100% of the shots you don’t take. -Wayne Gretzky", "The most difficult thing is the decision to act, the rest is merely tenacity -Amelia Earhart", "Every strike brings me closer to the next home run. -Babe Ruth", "Definiteness of purpose is the starting point of all achievement. -Clement Stone", "We must balance conspicuous consumption with conscious capitalism. -Kevin Kruse", "Life is what happens to you while you’re busy making other plans. -John Lennon"]



function newQuote() {
let randomQuote = Math.floor(Math.random() * (quote.length))
document.getElementById('quoteDisplay').innerHTML = quote[randomQuote];
}
