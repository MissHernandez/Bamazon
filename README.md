# Bamazon
This project is an Amazon-like storefront using MySQL and NodeJS.

* bamazonCustomer.js takes in orders from the user, depletes that stock from the store's inventory, and gives the total price of the purchase.

* bamazonManager.js gives the user a menu of options - View Products for Sale, View Low Inventory, Add to Inventory, and Add New Product.

## bamazonCustomer.js

Take orders, update products table in database, and give total price of purchase.

The products table in the MySQL database has an item_id, product_name, department_name, price, and stock_quantity column.

![Image of products table](/images/SQLTable1.png)

Using NodeJS, run bamazonCustomer.js.  A list of the store's inventory is given with the ID, product name, and price.

![Image of products table](/images/bCustomer1.png)

The user is prompted for what item by ID and how many units they want to purchase and is given the total price for their purchase.

![Image of products table](/images/bCustomer2.png)

The products table in the bamazon database is updated.

![Image of products table](/images/SQLTable-InventoryBefore.png)

![Image of products table](/images/SQLTable-InventoryAfter.png)

If the units requested are more than what's in the inventory, the user will get a message saying "Insufficient Quantity!" and will be prompted if they'd like to try again. If yes, the products will be shown again. If no, they'll receive a message saying, "Okay. Come back again!"

![Image of products table](/images/InsufficientQuanityYES.png)

![Image of products table](/images/InsufficientQuanityNO.png)
