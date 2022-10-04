const modelBtn = document.querySelector(".model-btn");
const closeBtn = document.querySelector(".close-btn");
const model = document.querySelector(".modal-overlay"); 
modelBtn.addEventListener("click",function(){
    console.log(model.classList);
model.classList.add("open-modal");
console.log(model.classList);

});

closeBtn.addEventListener("click",function(){
    model.classList.remove("open-modal");

});