// Write your code here
// 1. Create an array called products with the four required strings
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// 2. Function to log the first product in the array
function logFirstProduct() {
    console.log(products[0]);
}

// 3. Function to add a new product to the array (must be named addProduct)
function addProduct(productName) {
    products.push(productName);
}

// 4. Function to change the name of a product using its position and new name
function updateProductName(index, newName) {
    products[index] = newName;
}

// 5. Function to remove the last product from the array
function removeLastProduct() {
    products.pop();
}




// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
