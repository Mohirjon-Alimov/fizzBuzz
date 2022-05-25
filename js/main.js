let elForm = document.querySelector(".form");
let elInput = document.querySelector(".writeNum");
let elBtn = document.getElementsByTagName("button");
let out = document.querySelector(".output");
let content = document.querySelector(".out-content");


elForm.addEventListener("submit", function (evt){
  evt.preventDefault();


  let inpValue = Number(elInput.value);
  

  if(inpValue %3 === 0 && inpValue %5 === 0) {
    content.textContent = "FizzBuzz";
  }else if (inpValue %5 === 0){
    content.textContent = "FIzz";
  }else if (inpValue %3 === 0){
    content.textContent = "Buzz";
  }else {
    content.textContent = inpValue;
  }

})