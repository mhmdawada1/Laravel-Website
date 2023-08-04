const add_products = document.getElementById("btn-add");

add_products.addEventListener("click", async (e) => {
  e.preventDefault();
  const product_name = document.getElementById("Pname").value;
  const description = document.getElementById("desc").value;
  const category = document.getElementById("category").value;
  const fileInput = document.getElementById("file");
  const file = fileInput.files[0];

  const data = new FormData();
  data.append("product_name", product_name);
  data.append("description", description);
  data.append("category", category);
  data.append("image", file);
  console.log(data);
  try {
    const response = await fetch("", {
      method: 'POST',
      body: data
    });
  } catch (error) {
    console.log(error)
  }
});
