const shops = [
  { id: 0, title: "MediMart" },
  { id: 1, title: "PharmaPlus" },
  { id: 2, title: "Health Haven" },
  { id: 3, title: "Cure Corner" },
  { id: 4, title: "Wellness World" },
  { id: 5, title: "Remedies Rx" },
  { id: 6, title: "MedZone" },
  { id: 7, title: "Pill Palace" },
  { id: 8, title: "Health Harbor" },
  { id: 9, title: "Drug Depot" },
  { id: 10, title: "VitaVend" },
  { id: 11, title: "Cure Oasis" },
  { id: 12, title: "Remedy Junction" },
  { id: 13, title: "PharmLife" },
  { id: 14, title: "Health Haven" },
];

const drugs = [
  { id: 0, title: "Aspirin", price: 15.99, shop_id: 3, img: null },
  { id: 1, title: "Ibuprofen", price: 12.49, shop_id: 7, img: null },
  { id: 2, title: "Paracetamol", price: 10.99, shop_id: 1, img: null },
  { id: 3, title: "Omeprazole", price: 24.99, shop_id: 11, img: null },
  { id: 4, title: "Loratadine", price: 18.75, shop_id: 5, img: null },
  { id: 5, title: "Simvastatin", price: 30.25, shop_id: 9, img: null },
  { id: 6, title: "Metformin", price: 22.0, shop_id: 2, img: null },
  { id: 7, title: "Amoxicillin", price: 27.5, shop_id: 14, img: null },
  { id: 8, title: "Atorvastatin", price: 29.99, shop_id: 8, img: null },
  { id: 9, title: "Citalopram", price: 35.0, shop_id: 4, img: null },
  { id: 10, title: "Losartan", price: 20.75, shop_id: 6, img: null },
  { id: 11, title: "Metoprolol", price: 16.8, shop_id: 12, img: null },
  { id: 12, title: "Fluoxetine", price: 19.95, shop_id: 10, img: null },
  { id: 13, title: "Alprazolam", price: 40.5, shop_id: 0, img: null },
  { id: 14, title: "Ciprofloxacin", price: 32.25, shop_id: 13, img: null },
  { id: 15, title: "Lisinopril", price: 28.99, shop_id: 5, img: null },
  { id: 16, title: "Tramadol", price: 45.75, shop_id: 11, img: null },
  { id: 17, title: "Warfarin", price: 15.2, shop_id: 7, img: null },
  { id: 18, title: "Levothyroxine", price: 18.99, shop_id: 3, img: null },
  { id: 19, title: "Pregabalin", price: 50.0, shop_id: 14, img: null },
  { id: 20, title: "Gabapentin", price: 21.8, shop_id: 9, img: null },
  { id: 21, title: "Bupropion", price: 39.5, shop_id: 1, img: null },
  { id: 22, title: "Amlodipine", price: 17.25, shop_id: 6, img: null },
  { id: 23, title: "Diazepam", price: 33.99, shop_id: 8, img: null },
  { id: 24, title: "Escitalopram", price: 36.75, shop_id: 10, img: null },
  { id: 25, title: "Clopidogrel", price: 23.5, shop_id: 2, img: null },
  { id: 26, title: "Codeine", price: 55.0, shop_id: 12, img: null },
  { id: 27, title: "Prednisone", price: 28.25, shop_id: 4, img: null },
  { id: 28, title: "Montelukast", price: 19.5, shop_id: 0, img: null },
  { id: 29, title: "Pantoprazole", price: 42.99, shop_id: 13, img: null },
];

const def_img =
  "https://i.pinimg.com/564x/2b/66/db/2b66db81ba2345377152f9bdf35ce75f.jpg";

const shopsList = document.getElementById("shops-list");
const drugsContent = document.getElementById("drugs-content");

let curr_id = 0;

const shopBtn = document.getElementById("open-shop-btn");
const cartBtn = document.getElementById("open-cart-btn");

const shoppingCart = document.getElementById("shopping-cart");

const shoppingCartForm = document.getElementById("shopping-cart-form");
const shoppingCartBuyBtn = document.getElementById("shopping-cart-buy-btn");
const shoppingCartList = document.getElementById("shopping-cart-list");
const shoppingCartTotalPrice = document.getElementById(
  "shopping-cart-total-price"
);

let cart = [];

shops.forEach((shop) => {
  let el = document.createElement("li");
  el.classList.add("menu__item");
  el.dataset.id = shop.id;
  el.innerHTML = `
      <h1>${shop.title}</h1>
      <h1>></h1>
   `;
  shopsList.appendChild(el);
  el.onclick = () => {
    for (let i = 0; i < shopsList.children.length; i++) {
      shopsList.children[i].classList.remove("active");
    }
    el.classList.add("active");
    for (let i = 1; i < drugsContent.children.length; i++) {
      drugsContent.children[i].classList.remove("active");
      if (drugsContent.children[i].dataset.id == el.dataset.id)
        drugsContent.children[i].classList.add("active");
    }
  };
});

shops.forEach((shop) => {
  let list = document.createElement("ul");
  list.dataset.id = shop.id;
  list.className = "content__list drug-list";
  drugsContent.appendChild(list);
  drugs.forEach((drug) => {
    if (drug.shop_id == shop.id) {
      let el = document.createElement("li");
      el.innerHTML = `
            <div class="drug__img"><img src="${
              drug.img === "" ? drug.img : def_img
            }" alt="Preview"></div>
            <div class="drug__body">
            <h1 class="drug__title">${drug.title}</h1>
            <h2 class="drug__price">$${drug.price}</h2>
            <div class="drug__btn" id="drug-add-to-cart-btn" data-id=${
              drug.id
            }>ADD TO CART</div>
         `;
      list.appendChild(el);
    }
  });
});

document.querySelectorAll("[id=drug-add-to-cart-btn]").forEach((btn) => {
  btn.onclick = (e) => {
    if (!e.target.classList.contains("added")) {
      cart.push(drugs[e.target.dataset.id]);
      cart[cart.length - 1].ammount = 1;
      e.target.innerText = "Remove from Cart";
      e.target.classList.add("added");
    } else {
      let arr = [];
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id != e.target.dataset.id) {
          arr.push(cart[i]);
        }
      }
      cart = arr;
      e.target.innerText = "Add to Cart";
      e.target.classList.remove("added");
    }
  };
});

function SetDefActiveShop() {
  shopsList.children[0].classList.add("active");
  drugsContent.children[1].classList.add("active");
  drugsContent.children[1].classList.remove("non-active");
}

SetDefActiveShop();

shopBtn.onclick = () => {
  shoppingCart.classList.remove("active");
  document.body.style.overflow_y = "scroll";
  shoppingCartList.innerHTML = "";
  cartBtn.classList.remove("active");
};

cartBtn.onclick = () => {
  if (cartBtn.classList.contains("active")) return;
  cartBtn.classList.add("active");
  shoppingCart.classList.add("active");
  document.body.style.overflow_y = "hidden";
  calcTotalPrice();

  cart.forEach((item, id) => {
    let el = document.createElement("li");
    el.dataset.id = id;
    el.className = "shopping-cart__item item-shopping-cart";
    el.innerHTML = `
      <h1 class="item-shopping-cart__title">${item.title}</h1>
      <h2 class="item-shopping-cart__price">$${item.price}</h2>
      <div class="item-shopping-cart__ammount">
         <div data-id=${id} id="isc-ammount-remove"}>-</div>
         <h1 data-id=${id} id="isc-ammount-output">${item.ammount}</h1>
         <div data-id=${id} id="isc-ammount-add">+</div>
      </div>
      <div class="item-shopping-cart__delete__btn" data-id=${id}>X</div>
   `;
    shoppingCartList.appendChild(el);
  });

  console.log(
    document.querySelectorAll("[class=item-shopping-cart__delete__btn]")
  );

  document
    .querySelectorAll("[class=item-shopping-cart__delete__btn]")
    .forEach((item) => {
      item.onclick = (e) => {
        let res = [];
        for (let i = 0; i < cart.length; i++) {
          if (cart[i].id != e.target.dataset.id) res.push(cart[i]);
        }
        cart = res;
        console.log(cart);
        let remEl;
        for (let i = 0; i < shoppingCartList.children.length; i++) {
          if (shoppingCartList.children[i].dataset.id === e.target.dataset.id)
            remEl = shoppingCartList.children[i];
        }
        shoppingCartList.removeChild(remEl);
      };
    });

  document.querySelectorAll("[id=isc-ammount-remove]").forEach((item) => {
    item.onclick = (e) => {
      if (cart[e.target.dataset.id].ammount == 0) return;
      cart[e.target.dataset.id].ammount -= 1;
      document.querySelectorAll("[id=isc-ammount-output]").forEach((item) => {
        if (item.dataset.id === e.target.dataset.id)
          item.innerText = cart[e.target.dataset.id].ammount;
      });
      calcTotalPrice();
    };
  });
  document.querySelectorAll("[id=isc-ammount-add]").forEach((item) => {
    item.onclick = (e) => {
      cart[e.target.dataset.id].ammount += 1;
      document.querySelectorAll("[id=isc-ammount-output]").forEach((item) => {
        if (item.dataset.id === e.target.dataset.id)
          item.innerText = cart[e.target.dataset.id].ammount;
      });
      calcTotalPrice();
    };
  });
};

function calcTotalPrice() {
  let res = 0.0;
  cart.forEach((item) => {
    res += item.price * item.ammount;
  });
  shoppingCartTotalPrice.innerText = res;
}

shoppingCartBuyBtn.onclick = () => {
  if (!validForm()) {
    alert("Fill Form with ur data!");
    return;
  }
  if (!validCart()) {
    alert("Ur cart is empty!");
    return;
  }
  sendRes(createBuying());
};

function createBuying() {
  const buying = {
    name: shoppingCartForm[0].value,
    email: shoppingCartForm[1].value,
    phone: shoppingCartForm[2].value,
    adress: shoppingCartForm[3].value,
    cart: cart,
    total: shoppingCartTotalPrice.innerText
  };
  return buying;
}

function sendRes(res) {
  console.log(res);
}

function validForm() {
  if (
    shoppingCartForm[0].value == 0 ||
    shoppingCartForm[1].value == 0 ||
    shoppingCartForm[2].value == 0 ||
    shoppingCartForm[3].value == 0
  ) {
    return false;
  }
  return true;
}

function validCart() {
  if (cart.length == 0) {
    return false;
  }
  return true;
}
