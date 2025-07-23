const form = document.getElementById("form");
form.addEventListener("submit", async(event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
   
    const data = {
        email,
        password
    };
    // console.log("Form data:", data);

    try {
        const response = await fetch("http://localhost:3000/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const res = await response.json();
        console.log("Login response:", res);

        if (response.ok) {
            // Store token and user data
            localStorage.setItem("token", res.token);
            localStorage.setItem("user", JSON.stringify(res.user));
            
            alert(`Welcome back, ${res.user.name}!`);
            
            // Redirect to dashboard or home page
            window.location.href = "./index.html";
        } else {
            alert(res.message || "Login failed");
        }
        
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while processing your request.");
    }

});