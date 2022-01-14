const express = require("express");
const cors = require("cors");
const characters = require('./db.json');
let globalID = 4;

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A fresh start will put you on your way.", 
                    "A lifetime of happiness lies ahead of you.",
                    "A soft voice may be awfully persuasive.",
                    "All your hard work will soon pay off.",
                    "Happy life is just in front of you."
                  ];
  //console.log(fortunes);
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
})

app.get("/api/characters", (req, res) => {
  let namesArray = [];
  let namesString = '';
  for(let i = 0; i < characters.length; i++){
    //console.log(characters[i].name);
    namesArray.push(characters[i].name);
    namesString = namesArray.join('  /  ');  
  }
  //console.log(namesArray);
  res.status(200).send(namesString);
  
})

app.post("/api/characters", (req, res) => {
  console.log(req.body);
  let{name, imageURL} = req.body;
  let namesString = '';
  let namesArray = [];

  let newChar = {
    id: globalID,
    name,
    imageURL
  }

  characters.push(newChar);
  //console.log(characters);
  for (let i = 0; i < characters.length; i++){
    namesArray.push(characters[i].name)
  }
  namesString = namesArray.join('  /  ')
  res.status(200).send(namesString);
  globalID++
})

app.listen(4000, () => console.log("Server running on 4000"));
