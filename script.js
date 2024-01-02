const formElement = document.querySelector("form");
const submitButton = document.getElementById("submitButton");
const imageDisplay = document.getElementById("meme-Display");

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    const topText = document.querySelector("#Top-Text");
    const bottomText = document.querySelector("#Bottom-Text");
    const imageURL = document.querySelector("#image-url");
    const imageDisplay = document.querySelector("#Meme-Display");
    
    imageDisplay.innerHTML='';
    // console.log(topText.value);
    // console.log(bottomText.value);
    // console.log(imageURL.value);
    const imageDiv = document.createElement("div");
    const memeDiv = document.createElement("div");

    imageDiv.innerHTML = `
            <div class="topMemeText">${topText.value}</div>
            <img class="memeImage" src=${imageURL.value} />
            <div class="bottomMemeText">${bottomText.value}</div>
    `
    imageDiv.classList.add("memeDiv");
    console.log(imageDiv);
    // topTextDiv.classList.add("topMemeText");
    // bottomTextDiv.classList.add("bottomMemeText");

    // memeDiv.append(topTextDiv);
    // memeDiv.append(imageDiv);
    // memeDiv.append(bottomTextDiv);
 
    imageDisplay.append(imageDiv);
})