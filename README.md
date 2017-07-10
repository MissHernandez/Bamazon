# Bamazon
This project is an Amazon-like storefront using MySQL and NodeJS.

* bamazonCustomer.js takes in orders from the user, depletes that stock from the store's inventory, and gives the total price of the purchase.

* bamazonManager.js gives the user a menu of options - View Products for Sale, View Low Inventory, Add to Inventory, and Add New Product.

## bamazonCustomer.js

Take orders, update products table in database, and give total price of purchase.

The products table in the MySQL database has an item_id, product_name, department_name, price, and stock_quantity column.

![Image of products table](/images/SQLTable1.png)

Using NodeJS, run bamazonCustomer.js.  A list of the store's inventory is given with the ID, product name, and price.

![Image of store's inventory](/images/bCustomer1.png)

The user is prompted for what item by ID and how many units they want to purchase and is given the total price for their purchase.

![Image of customer prompt](/images/bCustomer2.png)

The products table in the bamazon database is updated.

![Image of inventory before purchase](/images/SQLTable-InventoryBefore.png)

![Image of inventory after purchase](/images/SQLTable-InventoryAfter.png)

If the units requested are more than what's in the inventory, the user will get a message saying "Insufficient Quantity!" and will be prompted if they'd like to try again. If yes, the products will be shown again. If no, they'll receive a message saying, "Okay. Come back again!"

![Image of insuffient quantity warning](/images/InsufficientQuantityYES.png)

![Image of insuffient quantity warning](/images/InsufficientQuantityNO.png)

## bamazonManager.js

Using NodeJS, run bamazonManager.js, where the user is given a menu of options.

![Image of bamazonManager Menu](/images/bManagerMenu.png)

### View Products for Sale

If the user chooses menu option #1 - View Products for Sale, they are given a list of the products with ID, product name, price, and how many units in stock.

![Image of View Products](/images/ViewProducts.png)

### View Low Inventory

If the user chooses menu option #2 - View Low Inventory, the user will be shown a list of products with less than 5 units in stock.

![Image of Low Inventory](/images/LowInventory.png)

### Add to Inventory

If the user chooses menu option #3 - Add Inventory, the user will be asked what item they want to add inventory to and how many units they want to add.

![Image of Add Inventory](/images/AddInventoryPrompt.png)

The products table in the bamazon database is updated.

![Image of inventory before adding](/images/AddInventoryBefore.png)

![Image of inventory after adding](/images/AddInventoryAfter.png)


### Add New Product

If the user chooses menu option #4 - Add New Product, the user will be prompted and asked details for their new product and the product will be added to the products table in the bamazon database.

![Image of Add New Product prompt](/images/AddNewProductPrompt.png)

![Image of updated products table](/images/AddNewProductTable.png)










