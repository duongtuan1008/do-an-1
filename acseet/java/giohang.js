function ree() {
  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];

  let spl = "";
  // '<div class="Cart-product"><div class="cart-item cart-column"><img class="Cart-img" src=""/><span class="Cart-infor"></span></div><span class="cart-price price-product cart-column"></span><div class="cart-quantity cart-quantity-ca cart-column"><inputstyle="width: 50%;text-align: center;line-height: 30px;border-radius: 5px;border: 1px solid #56ccf2;background-color: #eee;color: #333;padding-left: 5px;"id="q2_1"onchange="updateQuantity2(1)"type="number"value="1"/><button class="Cart-xoa" type="button">Xóa</button></div></div>'
  list.map((value, index) => {
    spl +=
      '<div class="Cart-product"><div class="cart-item cart-column"><img class="Cart-img" src="' +
      value.image +
      '"/><span class="Cart-infor">' +
      value.namesp +
      '</span></div><div class="size">size <span>' +
      value.sizeone +
      '</span></div><span class=" price-product cart-column">$<p class="cart-price">' +
      value.gia +
      '</p></span><div class="cart-quantity cart-quantity-ca cart-column"><input class="ipsl" onchange="sum()" style="width: 30%;text-align: center;line-height: 30px;border-radius: 5px;border: 1px solid #56ccf2;background-color: #eee;color: #333;padding-left: 5px;"id="q2_1"onchange="updateQuantity2(1)"type="number"value="' +
      value.soluong +
      '" min="1"/><button class="Cart-xoa" onclick="xoa(' +
      index +
      ')" type="button"><i class="fa-regular fa-trash-can"></i></button></div></div>';
    // console.log(value.gia);
  });

  document.querySelector(".over-cart2").innerHTML = spl;
  document.querySelector("#so").innerHTML = list.length;
  sum();
  sumtiket();
}
function doigiatri() {
  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  var Cart_product = document.querySelectorAll(".Cart-product");
  for (let i = 0; i < Cart_product.length; i++) {
    let soluong = Cart_product[i].querySelector("input").value;
    console.log(soluong);
    localStorage.setItem("list", JSON.stringify(list));
  }
}
function tiket() {
  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  let spltiket = "";
  // '<div class="Cart-product"><div class="cart-item cart-column"><img class="Cart-img" src=""/><span class="Cart-infor"></span></div><span class="cart-price price-product cart-column"></span><div class="cart-quantity cart-quantity-ca cart-column"><inputstyle="width: 50%;text-align: center;line-height: 30px;border-radius: 5px;border: 1px solid #56ccf2;background-color: #eee;color: #333;padding-left: 5px;"id="q2_1"onchange="updateQuantity2(1)"type="number"value="1"/><button class="Cart-xoa" type="button">Xóa</button></div></div>'
  list.map((value, index) => {
    spltiket +=
      '<div class="tiket-product"><div class="tiket-item"><img src="' +
      value.image +
      '" alt="" class="tiket-img" /><div class="information-tiket"><span class="tiket-infor">' +
      value.namesp +
      '</span><span style="color: rgb(117, 117, 117)" class="tiket-size">Size:<p>' +
      value.sizeone +
      '</p></span><span style="color: rgb(117, 117, 117)" class="thongtin">color:<p>' +
      value.thongtin +
      '</p></span><span style="color: rgb(117, 117, 117)" class="tiket-price">price:<p>' +
      value.gia +
      '</p>$</span><span style="color: rgb(117, 117, 117)" class="tiket-price">quantily:<p>' +
      value.soluong +
      "</p></span></div></div></div>";
  });
  document.querySelector(".over-tiket").innerHTML = spltiket;
}
document.addEventListener("DOMContentLoaded", tiket());
document.addEventListener("DOMContentLoaded", sumtiket());
document.addEventListener("DOMContentLoaded", ree());
function xoa(index) {
  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  if (
    swal(
      "Question!",
      "Are you sure you want to delete this product?",
      "question"
    )
  ) {
    list.splice(index, 1);
  }

  localStorage.setItem("list", JSON.stringify(list));
  ree();
  sumtiket();
}

function sum() {
  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  var Cart_product = document.querySelectorAll(".Cart-product");
  var tongtien = 0;
  // console.log(Cart_product.length)
  for (var i = 0; i < Cart_product.length; i++) {
    soluong = parseInt(Cart_product[i].querySelector("input").value);
    giasanpham = parseFloat(
      Cart_product[i].querySelector(".cart-price").innerHTML
    );
    console.log(giasanpham);
    var tong = soluong * giasanpham;
    tongtien += parseFloat(tong);
  }
  var tam = document.querySelector(".tam");
  tam.innerHTML = tongtien.toLocaleString("de-DE");
  var suatong = document.querySelector(".total");
  suatong.innerHTML = tongtien.toLocaleString("de-DE");
}
function sumtiket() {
  let address = document.getElementById("ip-address").value;
  if (address == "NUOC NGOAI") {
    document.querySelector(".shiptiket").innerHTML = "10%";
    let list = localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [];
    var Cart_product = document.querySelectorAll(".Cart-product");
    var tongtien = 0;
    // console.log(Cart_product.length)
    for (var i = 0; i < Cart_product.length; i++) {
      soluong = parseInt(Cart_product[i].querySelector("input").value);

      giasanpham = parseFloat(
        Cart_product[i].querySelector(".cart-price").innerHTML
      );
      console.log(giasanpham);
      var tong = soluong * giasanpham;
      tongtien += parseFloat(tong);
    }
    var tongtiensau = tongtien + (tongtien / 100) * 10;
    var tamtiket = document.querySelector(".tam-tiket");
    tamtiket.innerHTML = tongtien.toLocaleString("de-DE");
    var suatongtiket = document.querySelector(".totaltiket");
    suatongtiket.innerHTML = tongtiensau.toLocaleString("de-DE");
  } else {
    document.querySelector(".shiptiket").innerHTML = "Free";
    let list = localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [];
    var Cart_product = document.querySelectorAll(".Cart-product");
    var tongtien = 0;
    // console.log(Cart_product.length)
    for (var i = 0; i < Cart_product.length; i++) {
      soluong = parseInt(Cart_product[i].querySelector("input").value);

      giasanpham = parseFloat(
        Cart_product[i].querySelector(".cart-price").innerHTML
      );
      console.log(giasanpham);
      var tong = soluong * giasanpham;
      tongtien += parseFloat(tong);
    }
    var tamtiket = document.querySelector(".tam-tiket");
    tamtiket.innerHTML = tongtien.toLocaleString("de-DE");
    var suatongtiket = document.querySelector(".totaltiket");
    suatongtiket.innerHTML = tongtien.toLocaleString("de-DE");
  }
}
document.addEventListener("DOMContentLoaded", sumtiket());

const ipcode = document.getElementById("ip-code");

let address = document.getElementById("ip-address").value;
console.log(address);
let btntiket = document.getElementById("save-continue");
btntiket.addEventListener("click", function () {
  let inputpay = document.querySelectorAll(".ip-pay");

  console.log(inputpay);
  for (let i = 0; i < inputpay.length; i++) {
    if (inputpay[i].value === "") {
      swal("Error!", "input Error", "error");
    } else {
      document.getElementById("paying").style.display = "block";
      document.getElementById("save-continue").style.display = "none";
      let address = document.getElementById("ip-address").value;
      if (address == "NUOC NGOAI") {
        document.querySelector(".shiptiket").innerHTML = "10%";
        let list = localStorage.getItem("list")
          ? JSON.parse(localStorage.getItem("list"))
          : [];
        var Cart_product = document.querySelectorAll(".Cart-product");
        var tongtien = 0;
        console.log(Cart_product.length);
        for (var j = 0; j < Cart_product.length; j++) {
          soluong = parseInt(Cart_product[j].querySelector("input").value);

          giasanpham = parseFloat(
            Cart_product[j].querySelector(".cart-price").innerHTML
          );
          console.log(giasanpham);
          var tong = soluong * giasanpham;
          tongtien += parseFloat(tong);
        }
        var tongtiensau = tongtien + (tongtien / 100) * 10;
        const sumbill = { tongtien: tongtiensau };
        localStorage.setItem("sumbill", JSON.stringify(sumbill));
        var tamtiket = document.querySelector(".tam-tiket");
        tamtiket.innerHTML = tongtien.toLocaleString("de-DE");
        var suatongtiket = document.querySelector(".totaltiket");
        suatongtiket.innerHTML = tongtiensau.toLocaleString("de-DE");
      } else {
        let list = localStorage.getItem("list")
          ? JSON.parse(localStorage.getItem("list"))
          : [];
        document.querySelector(".shiptiket").innerHTML = "Free";

        var Cart_product = document.querySelectorAll(".Cart-product");
        var tongtien = 0;
        // console.log(Cart_product.length)
        for (var k = 0; k < Cart_product.length; k++) {
          soluong = parseInt(Cart_product[k].querySelector("input").value);

          giasanpham = parseFloat(
            Cart_product[k].querySelector(".cart-price").innerHTML
          );
          console.log(giasanpham);
          var tong = soluong * giasanpham;
          tongtien += parseFloat(tong);
        }
        var tamtiket = document.querySelector(".tam-tiket");
        tamtiket.innerHTML = tongtien.toLocaleString("de-DE");
        var suatongtiket = document.querySelector(".totaltiket");
        const sumbill = { tongtien: tongtien };
        localStorage.setItem("sumbill", JSON.stringify(sumbill));

        suatongtiket.innerHTML = tongtien.toLocaleString("de-DE");
      }
    }
  }
});
document.getElementById("paying").addEventListener("click", function () {
  var bill = JSON.parse(localStorage.getItem("sumbill"));
  var obj = JSON.parse(localStorage.getItem("user"));
  if (!obj) {
    swal("Error!", "payment failed please login to pay", "error").then(
      (result) => {
        if (result.value) {
          window.location.href = "../login.html";
        } else if (result.dismiss === "cancel") {
          swal("Cancelled", "Your stay here :)", "error");
        }
      }
    );
  } else {
    swal(
      "" + bill.tongtien + "",
      'Thank you dear <b style="color:green;">' +
        bill.tongtien +
        "</b> successful payment!",
      "success"
    ).then((result) => {
      if (result.value) {
        window.location.href = "../index.html";
        localStorage.removeItem("list");
        sumtiket();
      } else if (result.dismiss === "cancel") {
        swal("Cancelled", "Your stay here :)", "error");
      }
    });
  }
});
function doigiatri() {
  infomationtiket.style.display = "grid";
  billand.style.display = "none";
}
const buy = document.getElementById("buy");
var billand = document.getElementById("billand");
var infomationtiket = document.getElementById("tiket-profile");
buy.addEventListener("click", function () {});
function hienthikach() {
  let tk = document.querySelector(".taikhoan");
  var obj = JSON.parse(localStorage.getItem("user"));
  if (!obj) {
    document.querySelector("#khach").innerText = "moi ban dang nhạp ";
  } else {
    document.querySelector(".login").style.display = "none";
    document.querySelector("#khach").innerText = obj.namekhach;
  }
}
document.addEventListener("DOMContentLoaded", hienthikach());
//////////////////////////////////////////////////////////////
var quanitlyinput = document.querySelectorAll(".ipsl");
quanitlyinput.forEach((cout, index) => {
  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  cout.addEventListener("input", (event) => {
    var ipsl = event.target.value;
    console.log(ipsl);
    list[index].soluong = parseInt(ipsl);
    localStorage.setItem("list", JSON.stringify(list));
  });
});
