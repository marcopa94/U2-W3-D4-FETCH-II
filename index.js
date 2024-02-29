const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const imgAll = document.querySelectorAll("img");
const row = document.querySelectorAll(".col-md-4");
const canc = document.querySelectorAll(".btn-outline-danger");
// console.log(imgAll);

btn1.onclick = function () {
  call("dog");
};
btn2.onclick = function () {
  call("cats");
};

function call(nome) {
  fetch(`https://api.pexels.com/v1/search?query=[${nome}]`, {
    method: "GET",
    headers: {
      Authorization: "P0m801QVrj9UfF1EAFZi5S2J2p6S0HVchHKixD4w3iCOwW5Gz1m92cWP",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("ERRORE NEL REPERIMENTO DATI");
      }
    })
    .then((oggetti) => {
      console.log(oggetti);

      imgAll.forEach((img, index) => {
        img.setAttribute("src", oggetti.photos[index].src.tiny);
      });

      canc.forEach((el, index) => {
        el.onclick = () => {
          row[index].remove();
        };
      });
    });
}
