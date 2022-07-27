const toppings = document.querySelectorAll(".topping");

//topping nav bar buttons 
toppings.forEach((topping) => {
  topping.addEventListener("click", (e) => {
    console.log(topping.dataset);
  });
});

//check out button
const checkoutButton = document.querySelector(".button");
const answerHolder = document.querySelector("#total");
let total =0;
checkoutButton.addEventListener("click", (e) => {
   ingredients.forEach((ingredient) => {
      total += Number(ingredient.dataset.price);
   });
  answerHolder.innerHTML = `The total cost of your burger is $${total}`;
 });

const ingredients = document.querySelectorAll(".order .topping");
