const toppings = document.querySelectorAll(".topping");

//topping nav bar buttons 
toppings.forEach((topping) => {
  topping.addEventListener("click", (e) => {
    console.log(topping.dataset);
  });
});

//check out button
const checkoutButton = document.querySelector(".button");
checkoutButton.addEventListener("click", (e) => {
   console.log("checkout button clicked");
 });
