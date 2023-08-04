const register = document.getElementById("btn-up");

register.addEventListener("click",async (e) => {
  e.preventDefault();
  user_name = document.getElementById("name").value;
  email = document.getElementById("email-up").value;
  password = document.getElementById("password-up").value;
  const data = new FormData();
  data.append("name", user_name);
  data.append("email", email);
  data.append("password", password);
  const userData = {};
  data.forEach((value, key) => {
    userData[key] = value;
  });
  console.log(userData);
  try{
    const response = await fetch("",{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData)
    });
    const result = await response.json();
    if (result.status === "next step") {
      window.location.href = "src/pages/index.html";
  }
} catch(error) {
    console.log(error);
  }
})