// XMLHttpREquest => récupération de data

// function reqListener() {
//     console.log(this.responseText);
// }

// let req = new XMLHttpRequest();
// req.onload = reqListener;

// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
// req.open("get", "https://api.blablagues.net/?rub=blagues", true)
// req.send();

  // ------------ //
 //     Fetch    //
// ------------ //

// then => promesse => asynchrone
// fetch("mon-url", "objet d'option")
//     .then((response) => {
//     // console.log(response)
// // catch => else
// }).catch((err) => console.log(err))

// le paramètre de la fonction fléché = ce qui a été fait avant
// fetch("data.txt")
//  .then((res) => res.text()
//  .then((data) => console.log(data)));

// fetch("data.json").then((res) => res.json())
// .then((data) => console.log(data));

// .then((data) => console.log(data))

// fetch("data.json").then((res) => res.json());

const myHeaders = new Headers();

const init = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
}
const init2 = {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({
      pseudo: "from Scratch",
      message: "hello world !",
    }),
    mode: "cors",
    credentials: "same-origin",
}

fetch("data.json", init2)
 .then((res) => console.log(res));

 // CRUD => Create (POST)? read (GET), update (PUT), Delete (DELETE)

