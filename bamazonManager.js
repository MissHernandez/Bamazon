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

  menuOptions();

});

function menuOptions() {
	inquirer
		.prompt({
			name: "command",
			type: "rawlist",
			message: "What do you want to do?",
			choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
		}).then(function(answer) {
			var command = answer.command;

			switch(command) {
				case "View Products for Sale":
					viewProducts();
					break;
				case "View Low Inventory":
					viewLowInventory();
					break;
				case "Add to Inventory":
					addInventory();
					break;
				case "Add New Product":
					addProduct();
					break;
			};

		});
};

function viewProducts() {
	connection.query("SELECT * FROM products", function(err, results) {
		if (err) throw err;

		for (var i = 0 ; i < results.length ; i++) {
			if (results[i].stock_quantity > 0) {
      			console.log("--------------------------------");
      			console.log("ID: " + results[i].item_id);
     	 		console.log("Name: " + results[i].product_name);
     			console.log("Price: $" + results[i].price);
     			console.log("Units in Stock: " + results[i].stock_quantity);
     		};
    	};
	});
};


function viewLowInventory() {
	connection.query("SELECT * FROM products", function(err, results) {
		if (err) throw err;

		for (var i = 0 ; i < results.length ; i++) {
			if (results[i].stock_quantity < 5) {
      			console.log("--------------------------------");
      			console.log("ID: " + results[i].item_id);
     	 		console.log("Name: " + results[i].product_name);
     			console.log("Price: $" + results[i].price);
     			console.log("Units in Stock: " + results[i].stock_quantity);
     		};
    	};
	});

};



function addInventory() {
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
          name: "inventoryID",
          type: "input",
          message: "Enter the ID for the product you want to add inventory to."
        },
        {
          name: "addQuantity",
          type: "input",
          message: "How many units would you like to add?"
        }
      ]).then(function(answers) {

        var inventoryID = answers.inventoryID;
        var addQuantity = answers.addQuantity;

        connection.query("SELECT * FROM products WHERE item_id = ?", [inventoryID], function (err, res) {
        	var currentQuantity = res[0].stock_quantity;
        	var newQuantity = parseInt(currentQuantity) + parseInt(addQuantity);

        	updateInventory(newQuantity, currentQuantity)

        });

      });
  });

};


function updateInventory(newQuantity, currentQuantity) {
	connection.query("UPDATE products SET ? WHERE ?", [
	{
       	stock_quantity: newQuantity
    },
    {	
    	stock_quantity: currentQuantity
    }], function (error) {
		if (error) throw err;
        console.log("Inventory updated!");
    });

};


function addProduct() {
    inquirer
      .prompt([
        {
          name: "product_name",
          type: "input",
          message: "Enter product name."
        },
        {
          name: "department_name",
          type: "input",
          message: "Enter the department for this product."
        },
        {
          name: "price",
          type: "input",
          message: "Enter the price for this product."
        },
        {
          name: "stock_quantity",
          type: "input",
          message: "How much quantity is in stock?"
        },

      ]).then(function(answers) {

        connection.query("INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES (?, ?, ?, ?)", [answers.product_name, answers.department_name, answers.price, answers.stock_quantity], function (error) {
        		if (error) throw err;
        		console.log("Product added!");
        });

      });
};

