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
			choices: ["View Product Sales by Department", "Create New Department"]
		}).then(function(answer) {
			var command = answer.command;

			switch(command) {
				case "View Product Sales by Department":
					viewProductSales();
					break;
				case "Create New Department":
					createDepartment();
					break;
			};

		});
};

function viewProductSales() {


};



function createDepartment() {


};
