const form = document.getElementById("form"); 
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const brand = document.getElementById("brand").value;
    const image = document.getElementById("image").value;
    const catagory = document.getElementById("catagory").value;
    const rating = document.getElementById("rating").value;
    const desc = document.getElementById("desc").value;
    const price = document.getElementById("price").value;

    const data = {
        title,
        brand,
        Image: image,
        catagory,
        rating: parseFloat(rating),
        discription: desc,
        price: parseFloat(price)
    };
    
    const token = localStorage.getItem("token");
    
    try {
        const response = await fetch("http://localhost:3000/api/product/create_product", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            },
            body: JSON.stringify(data) 
        });
        
        const res = await response.json();
        
        if (response.ok) {
            alert("Product created successfully!");
            console.log("Success:", res);
            form.reset();
        } else {
            alert("Failed to create product: " + res.message);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while creating the product");
    }
});
const getData = async () => {
    const token= localStorage.getItem("token");
    const response =await fetch("http://localhost:3000/api/products/create_product",
        {
            method:"GET",
            headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}` 
        },
                body:JSON.stringify(data) 

        }
    );
    const res = await response.json();
    console.log(res)
}