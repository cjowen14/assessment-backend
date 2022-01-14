

const fortune = document.querySelector("#fortuneButton");
const allForts = document.querySelector("#allForts");
const newFortune = document.querySelector("#newFortune");
const deleteFort = document.querySelector("#deleteFortune");
const fortunesContainer = document.querySelector("#fortunes-container")


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

  function getAllFortunes(){
    axios.get("http://localhost:4000/api/fortunes")
    .then(function (res) {
      const fortNames = document.createElement('h2');
      fortNames.textContent = res.data;
      fortunesContainer.appendChild(fortNames);
    })
  }
  function submit(e){
    e.preventDefault();

    let fortuneText = document.querySelector("#newFor");

    let bodyObj = {
      fortune: fortuneText.value
    }

    addNewFort(bodyObj);

    fortune.value = '';
  }

  function addNewFort(body){
    axios.post("http://localhost:4000/api/fortune", body)
    .then(function (res){
      console.log(res.data);
      const fortNames = document.createElement('h2');
      fortNames.textContent = res.data;
      fortunesContainer.appendChild(fortNames);

    })
  }

  function deleteStart (e){
    e.preventDefault();

    let fortuneText = document.querySelector("#deleteFor");

    let bodyObj = {
      fortune: fortuneText.value
    }

    deleteFunc(bodyObj);

    fortune.value = '';
  }

  function deleteFunc(){
    axios.delete("http://localhost:4000/api/fortune/:id")
    .then(function(res){
      const data = res.data;
      alert(data);
    })
  }

  function fortuneList (fortune){
    const fortList = document.createElement('div');

    fortList.innerHTML = `<p> ${fortune.fortune}</p>`;

    fortunesContainer.appendChild(fortList);
  }

  getAllFortunes();

  fortune.addEventListener("click", fortuneFunction);
  newFortune.addEventListener("click", submit);
  deleteFort.addEventListener("click", deleteStart);