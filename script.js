const ratingElms = document.querySelectorAll(".rating");

let selectedRating = "";

ratingElms.forEach((ratingElm) => {
  ratingElm.addEventListener("click",(event) => {
    removeActive();
    selectedRating = event.target.innerText || event.target.parentNode.innerText;
    console.log(selectedRating);
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  })
})
function removeActive(){
  ratingElms.forEach((ratingElm) => {
    ratingElm.classList.remove("active");
  })
}
const btn1 = document.getElementById("btn");

const ratingContainer = document.getElementById("container");

btn1.addEventListener("click", () => {
   if(selectedRating !== ""){
    ratingContainer.innerHTML = `<strong>Thank You !</strong>
    <br>
    <br>
    <strong>Feedback : ${selectedRating}</strong>
    <br>
    <br>
    <p>We'll use your feedback to improve our support</p>`
  }
} )