const myPromise = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const res = await response.json();
       
      showData(res);
    };

    myPromise();

    function showData(data) {
      const container = document.getElementById("container");

      data.forEach((element, index) => {
        const h2 = document.createElement("h2");
        h2.innerText = element.category;

        const img = document.createElement("img");
        img.src = element.image;
        img.height=200;
        const p1 = document.createElement("p");
        p1.innerText = element.title;
        const p2 = document.createElement("p");
        p2.innerText = `Price: ₹${element.price}`;

          

        const p3 = document.createElement("p");
        p3.innerText = `Rating: ${element.rating.rate} ⭐ (${element.rating.count} reviews)`;
        const addToCartBtn=document.createElement("button");
        addToCartBtn.innerHTML="Add To Cart";
        addToCartBtn.style.width="150px";
        addToCartBtn.style.height="50px";
        addToCartBtn.style.backgroundColor="gray";
        addToCartBtn.addEventListener("click", () => {
          alert(`Added ${element.title} to cart!`);
          addToCart(element);
        });
        
        function addToCart(element) {
          let carryArray = JSON.parse(localStorage.getItem("cartData")) || [];
          carryArray.push(element);
          localStorage.setItem("cartData", JSON.stringify(carryArray));
          updateCartCount(); // Update cart count after adding item
        }    
       
        function getDataFromStorage(){
          let data = JSON.parse(localStorage.getItem("cartData")) || [];
          console.log("Cart data:", data);
          return data;
        }
        getDataFromStorage();

        const div = document.createElement("div");
        div.appendChild(h2);
        div.appendChild(img);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(addToCartBtn);
        div.style.border = "1px solid black";
        div.style.padding = "10px";
        div.style.margin = "10px";
        div.style.width = "400px";
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        div.style.flexDirection = "column";
        div.style.textAlign = "center";
        div.style.padding="20px";
        container.style.display = "grid";
        container.style.gridTemplateColumns = "repeat(3, 1fr)";
        container.appendChild(div);
      });
    }

   