let valued = "jewelery";

let url = `https://fakestoreapi.com/products/category/${valued}`;

axios.get(url).then(update);

function update(response) {
  let icon = document.querySelector("#image1");
  icon.setAttribute("src", `${response.data[0].image}`);
  let title = document.querySelector("#title1");
  title.innerHTML = response.data[0].title;
  let price = document.querySelector("#price1");
  price.innerHTML = response.data[0].price;
  let desc = document.querySelector(".des1");
  desc.innerHTML = response.data[0].description;

  let icon1 = document.querySelector("#image2");
  icon1.setAttribute("src", `${response.data[1].image}`);
  let title1 = document.querySelector("#title2");
  title1.innerHTML = response.data[1].title;
  let price1 = document.querySelector("#price2");
  price1.innerHTML = response.data[1].price;
  let desc1 = document.querySelector(".des2");
  desc1.innerHTML = response.data[1].description;

  let icon2 = document.querySelector("#image3");
  icon2.setAttribute("src", `${response.data[2].image}`);
  let title2 = document.querySelector("#title3");
  title2.innerHTML = response.data[2].title;
  let price2 = document.querySelector("#price3");
  price2.innerHTML = response.data[2].price;
  let desc2 = document.querySelector(".des3");
  desc2.innerHTML = response.data[2].description;

  let icon3 = document.querySelector("#image4");
  icon3.setAttribute("src", `${response.data[3].image}`);
  let title3 = document.querySelector("#title4");
  title3.innerHTML = response.data[3].title;
  let price3 = document.querySelector("#price4");
  price3.innerHTML = response.data[3].price;
  let desc3 = document.querySelector(".des4");
  desc3.innerHTML = response.data[3].description;
}
