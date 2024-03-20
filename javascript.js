function Form(event) {
    event.preventDefault(); // Prevent form submission for now

    // Fetch form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Perform basic validation
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }
      
    alert('Signup successful!\nName: ' + name + '\nEmail: ' + email);
    window.location.href = 'index.html';
}
function toggle(){
    var pass= document.getElementById("password");
    if(pass.type==="password"){
        pass.type="text";
    }else{
        pass.type="password";
    }
}
function submitOrder() {
    var productName = document.getElementById('productName').value;
    var quantity = document.getElementById('quantity').value;

    if (productName.trim() === '' || quantity.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    var validProducts = ['PASTA', 'FLASH STEAK', 'TAGLIATELLE BOLOGNESE', 'ICE CREAMS', 'FROZEN YOGHURT', 'DONUTS'];

    if (!validProducts.includes(productName.toUpperCase())) {
        alert("We don't have that order.\n Enter a valid order!");
        return;
    }

    
    alert('Order Placed!\nProduct: ' + productName + '\nQuantity: ' + quantity);
    window.location.href = 'products.html';
}
