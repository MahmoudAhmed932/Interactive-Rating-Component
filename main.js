let rate = document.querySelectorAll("ul.rate li");
let btn = document.querySelector("button");
let container = document.querySelector(".container");
let boxSub = document.querySelector(".box.sub")
let boxRes = document.querySelector(".box.rate");
let rateText = document.querySelector(".rateText");
rate.forEach(function(ele){
    ele.addEventListener("click" , function() {
        restlinks();
        ele.classList.add("active");
        rateText.textContent = `you selected ${ele.innerHTML} out of 5`;
    })
})
function restlinks() {
    rate.forEach((ele)=>{
        ele.classList.remove("active");
    })
}
btn.addEventListener("click" , function(){
    rate.forEach((ele)=>{
        if(ele.classList == "active"){
            boxSub.style.display ="none";
            boxRes.style.display ="block";
        }
    })
   
})

