var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;

  showProducts();

});


function showProducts() {
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;

    for (var i = 0 ; i < results.length ; i++) {
      console.log("--------------------------------");
      console.log("ID: " + results[i].item_id);
      console.log("Name: " + results[i].product_name);
      console.log("Price: $" + results[i].price);
    };

    inquirer
      .prompt([
        {
          name: "purchaseID",
          type: "input",
          message: "Enter the ID for the product you want to purchase."
        },
        {
          name: "purchaseQuantity",
          type: "input",
          message: "How many units would you like to purchase?"
        }
      ]).then(function(answers) {

        var purchaseID = answers.purchaseID;
        var purchaseQuantity = answers.purchaseQuantity;

        checkInventory(purchaseID, purchaseQuantity);


      });
  });

};

function checkInventory(purchaseID, purchaseQuantity) {
  connection.query("SELECT * FROM products WHERE item_id = ?", [purchaseID], function (err, results) {
    var availableQuantity = results[0].stock_quantity;
    var price = results[0].price;

    if (availableQuantity < purchaseQuantity) {
      console.log("Insufficient Quantity!");
      showProducts();
    }

    else {
      var newQuantity = availableQuantity - purchaseQuantity;
      totalPrice = (price * purchaseQuantity).toFixed(2);

      updateInventory(purchaseID, newQuantity, totalPrice);
      
    };

  });

};


function updateInventory(purchaseID, newQuantity, totalPrice) {

  connection.query("UPDATE products SET ? WHERE ?", 
    [{
      stock_quantity: newQuantity
    },
    { 
     item_id: purchaseID
    }], function (err, results) {

      console.log("Your total price is $" + totalPrice + ".");

  });
};

