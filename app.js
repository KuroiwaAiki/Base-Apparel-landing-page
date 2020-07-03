const myButton = document.querySelector(".arrow");
const myInput = document.querySelector(".input");
const errorIcon = document.querySelector(".error-icon");
const errorMessage = document.querySelector(".error-message");

const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


myButton.onclick = function(event){
  if(!myInput.value.match(emailFormat)){
    errorMessage.textContent="Please provide a valid email";
    errorMessage.style.visibility = "visible";
    errorIcon.style.visibility = "visible";
      event.preventDefault();
  } else {
    errorMessage.textContent="";
    errorMessage.style.visibility = "hidden";
    errorIcon.style.visibility = "hidden";
  };

  myInput.onblur = function() {
    errorMessage.style.visibility = "hidden";
    errorIcon.style.visibility = "hidden";
  }

}