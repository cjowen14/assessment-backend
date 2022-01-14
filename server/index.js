const express = require("express");
const cors = require("cors");
const fortuneList = require('./db.json');


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
  console.log(fortuneList);
  let randomIndex = Math.floor(Math.random() * fortuneList.length);
  let randomFortune = fortuneList[randomIndex].fortune;

  res.status(200).send(randomFortune);
})

app.get("/api/fortunes", (req, res) => {
  let fortunesArray = [];
  let fortunesString = '';
  for(let i = 0; i < fortuneList.length; i++){
    //console.log(characters[i].name);
    fortunesArray.push(fortuneList[i].fortune);
    fortunesString = fortunesArray.join('  /  ');
     
  }
  //console.log(namesArray);
  res.status(200).send(fortunesString);
  
})

app.post("/api/fortune", (req, res) => {
  //console.log(req.body);
  let{fortune} = req.body;
  let fortunesString = '';
  let fortunesArray = [];

  let newFort = {
    fortune
  }

  fortuneList.push(newFort);
  //console.log(fortuneList);
  for (let i = 0; i < fortuneList.length; i++){
    fortunesArray.push(fortuneList[i].fortune)
  }
  console.log(fortunesArray);
  fortunesString = fortunesArray.join('  /  ')
  res.status(200).send(fortunesString);

})



app.delete("/api/fortune/:id", (res, req) => {
  let index = fortuneList.findIndex((fort) => {
    return fort.id === +req.params.id;
  })
})

app.listen(4000, () => console.log("Server running on 4000"));
