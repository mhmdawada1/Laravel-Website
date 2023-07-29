const register = document.getElementById("btn-up");

register.addEventListener("click",async (e) => {
  e.preventDefault();
  fname = document.getElementById("fname").value;
  lname = document.getElementById("lname").value;
  email = document.getElementById("email-up").value;
  password = document.getElementById("password-up").value;
  const data = new FormData();
  data.append("fname", fname);
  data.append("lname", lname);
  data.append("email", email);
  data.append("password", password);
  const userData = {};
  data.forEach((value, key) => {
    userData[key] = value;
  });
  console.log(userData);
  try{
    const response = await fetch("http://localhost:8000/e-commerce/api/users",{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData)
    });
    const result = response.json();
    if (result.status == "next step") {
      window.location.href("src/pages/index.html");
  }
} catch(error) {
    console.log(error);
  }
})