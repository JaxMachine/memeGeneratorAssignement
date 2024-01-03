const formElement = document.querySelector("form");
const submitButton = document.getElementById("submitButton");
const imageDisplay = document.getElementById("meme-Display");
const resetButton = document.getElementById("resetButton");
const memeList = document.getElementById("memeList")


function resetMemes(){
    const memes = document.getElementsByClassName("memeLi");
    console.log("Clicked Reset!");
    while(memes.length > 0){
        memes[0].parentNode.removeChild(memes[0]);
    }
    }

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    const topText = document.querySelector("#Top-Text");
    const bottomText = document.querySelector("#Bottom-Text");
    const imageURL = document.querySelector("#image-url");
    // const imageDisplay = document.querySelector("#meme-Display");
    // imageDisplay.innerHTML='';

    const imageLi = document.createElement("li");
    const imageDiv = document.createElement("div");

    const deleteButton =  document.createElement("button")
    const deleteButtonFront = document.createElement("Span");
    deleteButtonFront.classList.add("front");
    deleteButton.classList.add("pushable");
    deleteButton.classList.add("deleteButton");
    deleteButtonFront.innerHTML="Delete This!";
    deleteButton.append(deleteButtonFront);

    

    deleteButton.addEventListener("click", function(e){
         e.preventDefault();
         console.log("Clicked Delete");
         console.log(memeList.children[0]);
         memeList.removeChild(this.parentElement);
     });

    imageDiv.innerHTML = `
            <span class="topMemeText">${topText.value}</span>
            <span class="bottomMemeText">${bottomText.value}</span>
            <span> <img class="memeImage" src=${imageURL.value} /></span>
    `
  
 

    imageLi.classList.add("memeLi");
    // imageDiv.append(deleteButton);
    imageLi.appendChild(imageDiv);
    imageLi.appendChild(deleteButton);

    memeList.appendChild(imageLi);
    formElement.reset();

});