const login = document.getElementById("login-btn");

login.addEventListener("click", async () => {
  e.preventDefault();
  email = document.getElementById("email-in").value;
  password = document.getElementById("password-in").value;

  const data = new FormData();
  data.append("email",email);
  data.append("password",password);
  try{
    const response = await fetch("",{
      method : "POST",
      body : data
    });
    const res = await response.json();

    if (res.status == "success"){
      window.location.href = "/src/pages/landingpage.html";
    }
    else {
      document.querySelector(".wrong-password").innerHTML = "Invalid username or password!";
    }
  }catch(error) {
    console.log(error);
  }
})