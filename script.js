let nouns = [
    "apple",
    "ball",
    "cat",
    "dog",
    "elephant",
    "flower",
    "guitar",
    "house",
    "island",
    "jacket",
    "kite",
    "lion",
    "mountain",
    "notebook",
    "ocean",
    "pencil",
    "queen",
    "robot",
    "sun",
    "tree"
  ];

  let adjectives = [
    "beautiful",
    "quick",
    "lazy",
    "bright",
    "dark",
    "happy",
    "sad",
    "loud",
    "silent",
    "strong",
    "weak",
    "tall",
    "short",
    "brave",
    "calm",
    "curious",
    "gentle",
    "kind",
    "proud",
    "wise"
  ];

let salutations = [
    "Hello",
    "Hi",
    "Hey",
    "Good morning",
    "Good afternoon",
    "Good evening",
    "Greetings",
    "Salutations",
    "Howdy",
    "What's up",
    "Welcome",
    "Hi there",
    "Good day",
    "Good to see you",
    "Hey there",
    "How's it going",
    "Nice to meet you",
    "How are you",
    "Yo",
    "Pleasure to meet you"
  ];
  

// greeting (array) + UserName (input) + you are a adjective() + noun ()!

function randomMessage(username = "Stranger", greeting=["Hello"] , adj =["beautiful"], noun = ["apple"]){
    let x = Math.floor(Math.random()*greeting.length)
    let y = Math.floor(Math.random()*adj.length)
    let z = Math.floor(Math.random()*noun.length)
    console.log(`${greeting[x]}, ${username}! you are a ${adj[y]} ${noun[z]}!`)
}

randomMessage("Mr. Smith",salutations,adjectives,nouns )