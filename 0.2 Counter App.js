let Decrementbutton = document.querySelector(".Decbtn");
let Incrementbutton = document.querySelector(".Incbtn");
let Resetbutton = document.querySelector(".Resbtn");
let Valuebutton = document.querySelector(".Valudbtn");

let NewValue=0;

// To increment the value of counter
Incrementbutton.addEventListener("click",()=>{
  if (NewValue<10) {
    NewValue++;
    Valuebutton.innerHTML=NewValue;
  }
  else{
    alert("10+ value are not allowed")
  }
})

// To decrement the value of counter

Decrementbutton.addEventListener("click",()=>{
  if (NewValue>0 || NewValue >-10) {
    NewValue--
    Valuebutton.innerHTML=NewValue
  }
  else{
    alert("10- value are not allowed")
  }

})

// To reset the counter to zero

Resetbutton.addEventListener("click",()=>{
  NewValue=0;
  Valuebutton.innerHTML=NewValue
})