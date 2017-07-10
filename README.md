# Bamazon
This project is an Amazon-like storefront using MySQL and NodeJS.

* bamazonCustomer.js takes in orders from the user, depletes that stock from the store's inventory, and gives the total price of the purchase.

* bamazonManager.js gives the user a menu of options - View Products for Sale, View Low Inventory, Add to Inventory, and Add New Product.

## bamazonCustomer.js

Take orders, update products table in database, and give total price of purchase.

The products table in MySQL database has an item_id, product_name, department_name, price, and stock_quantity column.

![Image of products table](/images/SQLTable1.png)


