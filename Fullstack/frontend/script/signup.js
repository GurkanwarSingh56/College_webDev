

const form = document.getElementById("form");
form.addEventListener("submit", async(event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const age = document.getElementById("age").value;
    const data = {
        name,
        email,
        password,
        phoneNumber,
        age
    };
    console.log("Form data:", data);
    
    try {
    const response = await fetch("http://localhost:3000/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();
    console.log(res);
    // console.log("Sending data to the server..." + data);
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while processing your request.");
    return;
  }


});
