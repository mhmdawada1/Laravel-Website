const register = document.getElementById("btn-up");

register.addEventListener("click",async (e) => {
  e.preventDefault();
  fname = document.getElementById("fname").value;
  lname = document.getElementById("lname").value;
  email = document.getElementById("email-up").value;
  password = document.getElementById("password-up").value;
  data = new FormData();
  data.append("fname",fname);
  data.append("lname",lname);
  data.append("email",email);
  data.append("password",password);
  try{
    const response = await fetch(,{
      method: POST,
      body: data
    });
    const result = response.json();
    if (result.status == "next step") {
      window.location.href("src/pages/index.html");
  }
} catch(error) {
    console.log(error);
  }
})