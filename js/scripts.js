// business logic
function Pizza(size, crust, sauce, topping){
  this.pizzaSize = size;
  this.pizzaCrust = crust;
  this.pizzaSauce = sauce;
  this.pizzaTopping = topping;
}
Pizza.prototype.pizzaPrice = function(){
  var price = 0;
  if(this.pizzaSize === "large"){
    price += 4;
  } else if (this.pizzaSize === "medium"){
    price +=3
  } else if (this.pizzaSize === "small"){
    price +=2
  }
  if (this.pizzaCrust === "thick"){
    price += 3;
  } else if (this.pizzaCrust === "normal" || this.pizzaCrust === "thin"){
    price +=2;
  }
  if(this.pizzaSauce === "bbq"){
    price += 3;
  } else if (this.pizzaSauce=== "tomato" || this.pizzaSauce=== "pesto"){
    price +=2
  }
  if(this.pizzaTopping.length > 2){
      price +=3;
  } else if (this.pizzaTopping.length = 2){
    price +=2;
  } else {
    price +=1;
  }
  return price;
}
// ui logic
$("form").submit(function(event){
  event.preventDefault();

  var inputSize = $("#size").val();
  var inputCrust = $("#crust").val();
  var inputSauce = $("#sauce").val();
  var inputToppings = [];
  $.each($("input[name='veggie']:checked"), function(){
      inputToppings.push($(this).val());
  });
  var pizzaOrder = new Pizza(inputSize, inputCrust, inputSauce, inputToppings);

  $(".size").text(pizzaOrder.pizzaSize);
  $(".crust").text(pizzaOrder.pizzaCrust);
  $(".sauce").text(pizzaOrder.pizzaSauce);
  $(".topping").text(pizzaOrder.pizzaTopping);
  $(".cost").text(pizzaOrder.pizzaPrice());
  $("#output").show();
});

$("#ordernow").click(function(){
  $('#introduction').slideUp();
  $('.container').slideDown();
});
