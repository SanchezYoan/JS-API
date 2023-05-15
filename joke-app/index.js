// https://api.blablagues.net/?rub=blagues


function getJoke() {

    const header = document.getElementById("header");
    const text = document.getElementById("content");
    
    fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then(({data}) => {
        // destucture du code
        // const joke = data.data.content;
        const { content } = data;
        // console.log(joke);

        header.textContent = content.text_head;
        
        text.textContent =
        content.text !== ""
        ? content.text 
        : content.text_hidden;
    });
}

document.body.addEventListener("click", getJoke)