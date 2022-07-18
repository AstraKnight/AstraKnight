// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
  quote: `"The best way to find yourself is to lose yourself in the service of others."`,
  person: `Mahatma Gandhi`
}, {
  quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
  person: `Albert Einstein`
}, {
  quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
  person: `Aristotle`
}, {
  quote: `"Your time is limited, so don't waste it living someone else's life."`,
  person: `Steve Jobs`
}, {
  quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
  person: `Benjamin Franklin`
}, {
  quote: `"It does not matter how slowly you go as long as you do not stop."`,
  person: `Confucius`
}, {
  quote: `"Our lives begin to end the day we become silent about things that matter."`,
  person: `Martin Luther King, Jr.`
}, {
  quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
  person: `Dalai Lama`
}, {
  quote: `"The journey of a thousand miles begins with one step."`,
  person: `Lao Tzu`
},{
  quote: `"Remember you have to die."`,
  person: `Me`
},{
  quote: `"I'm late! I'm late! For a very important date!"`,
  person: `White Rabbit`
},{
  quote: `"Never let what you cannot do get in the way of what you can."`,
  person: `John Wooden`
},{
  quote: `"Believe you can and you are halfway there."`,
  person: `A wiseman`
},{
  quote: `"If you speak English well, a lot of your problems will be solved."`,
  person: `Me`
},{
  quote: `"Accept the things you cannot change, change the things you can and have the wisdom to know the difference."`,
  person: `Me`
},{
  quote: `"I can't do anything, but I can do it well."`,
  person: `Me`
},{
  quote: `"No matter how you shake and dance, the last few drops fall on your pants."`,
  person: `Two and a half Men`
},{
  quote: `"I'll rip your head off and shit down your neck."`,
  person: `A pissed off guy`
},{
  quote: `"I'll kick your ass into your throat."`,
  person: `A really pissed off guy`
},{
  quote: `"Enjoy the moment because it could be your last."`,
  person: `A dying guy`
},{
  quote: `"People who say it cannot be done should not interrupt those who are doing it."`,
  person: `Confucius`
},{
  quote: `"There are infinite things to learn, but finite time to learn them."`,
  person: `Me`
},{
  quote: `"Trick or treat smell my feet, give me something good to eat. If you don't, I don't care, I'll pull down your underwear.`,
  person: `Halloween`
},
];

btn.addEventListener('click', function(){

  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;

})