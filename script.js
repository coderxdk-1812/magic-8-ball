const main = document.getElementById("main");
console.log(main);

const show = `
<img src="front.jpg" class="center">
`
main.innerHTML=show

var phrases = [  
    "That sounds good",
    "Yes, you should definetly do this",
    "Not sure",
    "Maybe not today",
    "No",
    "Yes - definetly",
    "Godforbid",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "Unsure of the answer please try later",
    "The stars point to the answer yes",
    "You may rely on it",
    "Outlook not so good",
    "Outlook good",
    "Reply hazy- try again",
    "Signs point to yes",
    "Very doubtful",
    "As I see it- yes",
    "Ask again later",
    "It is certain",
    "It is decidedly so",
    "Most likely",
    "My reply is no",
    "My sources say no",
    "Without a doubt"
]
const phrase = phrases[Math.floor(Math.random()* 27)];

window.addEventListener('click',(event)=>
{main.innerHTML=`
<h1>The prediction is....</h1>
<img src="back.jpg" class="center"/>
<h3> ${phrase} </h3>`}
)
