const fortune = document.querySelector("#fortuneButton");
const allChars = document.querySelector("#allChars");
const newChar = document.querySelector("#newChar");


document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

  function fortuneFunction(){
      axios.get("http://localhost:4000/api/fortune")
      .then(function(res){
          const data = res.data;
          alert(data);
      })
  }

  function getAllChars(){
    axios.get("http://localhost:4000/api/characters")
    .then(function (res) {
      const data = res.data;
      alert(data);
    })
  }
  function submit(e){
    e.preventDefault();

    let name = document.querySelector("#addChar");
    let imageURL = document.querySelector("#img");

    let bodyObj = {
      name: name.value,
      imageURL: imageURL.value
    }

    addNewChar(bodyObj);

    name.value = '';
    imageURL.value = '';
    
  }

  function addNewChar(body){
    axios.post("http://localhost:4000/api/characters", body)
    .then(function (res){
      const data = res.data;
      alert(data);
    })
  }


  fortune.addEventListener("click", fortuneFunction);
  allChars.addEventListener("click", getAllChars);
  newChar.addEventListener("click", submit);