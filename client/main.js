const fortune = document.querySelector("#fortuneButton");

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


    fortune.addEventListener("click", fortuneFunction);