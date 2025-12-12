
let url = "https://dummyjson.com/products?limit=194";
fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((d) => {
        console.log(d.products);
        let data = d.products
        for (let i = 0; i < data.length; i++) {
            let linking = document.createElement("a")
            let productDiv = document.createElement("div")
            let productTitle = document.createElement("h2")
            let productImage = document.createElement("img")
            let productbrand = document.createElement("h3")
            let productRating = document.createElement("p")
            let productCategory = document.createElement("p")
            let productPrice = document.createElement("p")
            let productDiscount = document.createElement("p")
            let productcart = document.createElement("button")
            productcart.innerText = `Add to Cart 🛒`
            productcart.onclick = () => {
                let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
                let existingItem = cartItems.find(item => item.id === data[i].id);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cartItems.push({ id: data[i].id, title: data[i].title, price: Math.floor(data[i].price * 83), quantity: 1 });
                }
            }


            productTitle.innerText = data[i].title
            productImage.src = data[i].thumbnail
            productbrand.innerText = `Brand: ${data[i].brand}`
            productRating.innerText = `Rating: ${data[i].rating}`
            productCategory.innerText = `Category: ${data[i].category}`
            productPrice.innerText = `RS ${Math.floor(data[i].price * 83)}`
            productDiscount.innerText = `Discount: ${data[i].discountPercentage}% off`

            productDiv.append(productTitle, productImage, productPrice, productCategory, productDiscount, productbrand, productRating,  productcart)
           
            linking.href = `cart.html?id=${data[i].id}`
            linking.append(productDiv)

            document.querySelector("body").append(linking)
            productDiv.classList.add("product")

            searchProduct = () => {
                let input = document.getElementById('search').value
                input = input.toLowerCase();
                let x = document.getElementsByClassName('product');
                for (i = 0; i < x.length; i++) {
                    if (!x[i].innerHTML.toLowerCase().includes(input)) {
                        x[i].style.display = "none";
                    }
                    else {
                        x[i].style.display = "block";
                    }
                }
            }



        }
    })

    .catch((err) => {
        console.log(err);
    });
    // give functionality to search bar in index.html file  

    function searchProduct() {
        let input = document.getElementById('search').value
        input = input.toLowerCase(); 
        let x = document.getElementsByClassName('product');
        for (i = 0; i < x.length; i++) { 
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display="none";
            }
            else {
                x[i].style.display="block";
            }
        }
    }
// code for showing cart item count on cart icon
    function updateCartCount() {
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        let itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        document.getElementById("cart-count").innerText = itemCount;
    }

    // Call the function to update cart count on page load
    updateCartCount();
    // code for showing categories in sidebar
    let categories = ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration", "furniture", "tops", "womens-dresses", "womens-shoes", "mens-shirts", "mens-shoes", "mens-watches", "womens-watches", "womens-bags", "womens-jewellery", "sunglasses", "automotive", "motorcycle", "lighting"];
    let sidebar = document.getElementById("sidebar");
    categories.forEach(category => {
        let categoryLink = document.createElement("a");
        categoryLink.href = "#";
        categoryLink.innerText = category.charAt(0).toUpperCase() + category.slice(1);
        categoryLink.onclick = () => {
            let products = document.getElementsByClassName("product");
            for (let i = 0; i < products.length; i++) {
                if (products[i].innerText.toLowerCase().includes(category.toLowerCase())) {
                    products[i].style.display = "block";
                } else {
                    products[i].style.display = "none";
                }
            }
        };
        sidebar.appendChild(categoryLink);
    });
    


