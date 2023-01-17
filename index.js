'use strict'

let singBtn=document.querySelector("#sing"),
    infosBtn=document.querySelector("#infos"),
    singBox=document.querySelector(".box"),
    infosBox=document.querySelector(".box2"),
    submitBtn=document.querySelector("#submit"),
    ismInp=document.getElementById("ismInp"),
    emailInp=document.getElementById("emailInp"),
    parolInp=document.getElementById("parolInp"),
    ismSpan=document.querySelector("#ism"),
    emailSpan=document.querySelector("#email"),
    parolSpan=document.querySelector("#parol"),
    okBtn=document.querySelector(".btn ")

singBtn.addEventListener("click",function(){
    singBox.style.top="50%";
})

submitBtn.addEventListener("click",function(){
  if(!ismInp.value || !emailInp.value || !parolInp.value){
    alert("toliq toldiring")
  }
  else {
    alert("ro`yhatdan o`tingiz")
    singBox.style.top="-200px";
    ismSpan.textContent=ismInp.value;
    emailSpan.textContent=emailInp.value;
    parolSpan.textContent=parolInp.value
  }
})

infosBtn.addEventListener("click",function( ){
  infosBox.style.top="50%"

})
okBtn.addEventListener("click", function(){
  infosBox.style.top="-200px"
})
