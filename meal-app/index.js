
// .then((data) => console.log(data))

fetch("data.json").then((res) => res.json());

const myHeaders = new Headers();

const init = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
}
const post = {
    method: "POST",
    headers: myHeaders,
    mode: "cors",
}

// fetch("data.json", init)
//  .then((res) => console.log(res));

 // CRUD => Create (POST)? read (GET), update (PUT), Delete (DELETE)

