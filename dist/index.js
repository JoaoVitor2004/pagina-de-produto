var btns = document.querySelectorAll(".btn");
var btnPreview = document.querySelectorAll(".btn-preview");
var imgsPreview = document.querySelectorAll(".img-preview");
var imgs = document.querySelectorAll(".img");
var thumbs = document.querySelectorAll(".thumb");
var modal = document.querySelector(".modal");
var fade = document.querySelector(".fade");
var btnClose = document.querySelector(".btn-close");
var btnModal = document.querySelectorAll(".btn-modal");
var btnBack = document.querySelector(".btn-voltar");
var container = document.querySelector(".container-cart");
var btnAddCart = document.querySelector(".btn-add");
var btnsQuantity = document.querySelectorAll(".btn-quantidade");
var textQuantity = document.querySelector("#text-quantity");
var value = document.querySelector("#value");
var iconSideBar = document.querySelector("#icon-menu");
var imgRotacionar = document.querySelector(".rotacionar");
var indexAtual = 0;
var quantity = 0;
var total = 0;
function updateTotal() {
    var res = 125 * quantity;
    return res;
}
function createBtnRemoveCart(container) {
    var btnRemoveCart = document.createElement("button");
    btnRemoveCart.classList.add("btn-cart");
    btnRemoveCart.textContent = "Remove";
    btnRemoveCart.addEventListener("click", function () {
        container.innerHTML = "";
        btnRemoveCart.remove();
        textQuantity.classList.toggle("hide");
    });
    return btnRemoveCart;
}
function createBtnSend() {
    var btnSend = document.createElement("button");
    btnSend.classList.add("btn-cart");
    btnSend.textContent = "Send";
    btnSend.addEventListener("click", function () {
        window.open("https://wa.me/".concat(933677647, "?text=\"Ol\u00E1 quero entrar em contato!\""));
    });
    return btnSend;
}
function showModal() {
    fade.classList.toggle("hide");
    modal.classList.toggle("hide");
}
function removeImgAtual(index) {
    var classAtivo = document.querySelector(".ativo");
    classAtivo.classList.remove("ativo");
    imgs[index].classList.add("ativo");
}
function removeThumbAtual(index) {
    var classAtivo = document.querySelector(".active");
    classAtivo.classList.remove("active");
    thumbs[index].classList.add("active");
}
function removeImgPreview(index) {
    var classAtived = document.querySelector(".atived");
    classAtived.classList.remove("atived");
    imgsPreview[index].classList.add("atived");
}
document.body.addEventListener("click", function (event) {
    if (event.target.closest(".btn-add")) { // type-asertion ou Afirmação de tipo
        if (quantity === 0) {
            return;
        }
        Toastify({
            text: "Order sent to cart",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            offset: {
                x: 50,
                y: 100
            },
            style: {
                display: "flex",
                justifyContent: "space-between",
                width: "300px",
                maxWidth: "100%",
                textAlign: "center",
                background: "hsl(220, 13%, 13%)",
            }
        }).showToast();
        textQuantity.classList.remove("hide");
        textQuantity.textContent = String(quantity);
        container.innerHTML = "\n        <div class=\"conteudo-cart\">\n            <img class=\"thumb\" src=\"./src/assets/images/image-product-1-thumbnail.jpg\" alt=".concat(indexAtual, ">\n            <div class=\"descricao\">\n                <p class=\"title\">Fall Limited Edition Sneakers</p>\n                <div class=\"container-price\">\n                    <p>$125.00 x 3</p>\n                    <p>$").concat(updateTotal(), ",00</p>\n                </div>\n            </div>\n        </div>\n        ");
        container.append(createBtnRemoveCart(container), createBtnSend());
    }
});
btns.forEach(function (btn) {
    btn.addEventListener("click", showModal);
});
btnModal.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        if (index === 0) {
            indexAtual = indexAtual === 0 ? 3 : indexAtual -= 1;
        }
        else if (index === 1) {
            indexAtual = indexAtual === 3 ? 0 : indexAtual += 1;
        }
        removeImgAtual(indexAtual);
        removeThumbAtual(indexAtual);
    });
});
btnsQuantity.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        if (index === 0) {
            if (quantity <= 0) {
                alert("cannot be less than zero");
                return;
            }
            quantity -= 1;
        }
        else if (index === 1) {
            quantity += 1;
        }
        value.textContent = String(quantity);
    });
});
btnClose.addEventListener("click", showModal);
btnPreview.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        if (index === 0) {
            indexAtual = indexAtual === 0 ? 3 : indexAtual -= 1;
        }
        else if (index === 1) {
            indexAtual = indexAtual === 3 ? 0 : indexAtual += 1;
        }
    });
});
iconSideBar.addEventListener("click", function () {
    var imgMenu = "./src/assets/images/icon-menu.svg";
    var imgClose = "./src/assets/images/icon-close.svg";
    if (iconSideBar.getAttribute("src") === imgMenu) {
        iconSideBar.setAttribute("src", imgClose);
    }
    else {
        iconSideBar.setAttribute("src", imgMenu);
    }
});
