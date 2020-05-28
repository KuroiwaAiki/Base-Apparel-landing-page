

// I would code differently if it was an actual form
// this code is just for presentation

const myButton = document.querySelector(".arrow");
const myInput = document.querySelector(".input");
const errorIcon = document.querySelector(".error-icon");
const errorMessage = document.querySelector(".error-message");

// eventlistner for input not nessesary but I like the style

myInput.addEventListener("input", function(event){
  if (!myInput.validity.typeMismatch) {
    errorMessage.style.visibility = "hidden";
    errorIcon.style.visibility = "hidden";
    myInput.setCustomValidity(" ");
  }
})

// eventlistener for submit button

myButton.onclick = function() {
  if (myInput.validity.typeMismatch) {
    errorMessage.textContent="Please provide a valid email";
    errorMessage.style.visibility = "visible";
    errorIcon.style.visibility = "visible";
    myInput.setCustomValidity(" ");
  } else {
    errorMessage.textContent="";
    errorMessage.style.visibility = "visible";
    errorIcon.style.visibility = "hidden";
    myInput.setCustomValidity(" ");
  }
}

// hide error message when focus is away

myInput.onblur = function() {
  errorMessage.style.visibility = "hidden";
  errorIcon.style.visibility = "hidden";
}
