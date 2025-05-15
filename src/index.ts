const btns = document.querySelectorAll(".btn")
const btnPreview = document.querySelectorAll(".btn-preview")
const imgsPreview = document.querySelectorAll(".img-preview")
const imgs = document.querySelectorAll(".img")
const thumbs = document.querySelectorAll(".thumb")

const modal = document.querySelector(".modal")
const fade = document.querySelector(".fade")
const btnClose = document.querySelector(".btn-close")

const btnModal = document.querySelectorAll(".btn-modal")
const btnBack = document.querySelector(".btn-voltar")

const container = document.querySelector(".container-cart")
const btnAddCart = document.querySelector(".btn-add")
const btnsQuantity = document.querySelectorAll(".btn-quantidade")
const textQuantity = document.querySelector("#text-quantity")
const value = document.querySelector("#value")

const iconSideBar = document.querySelector("#icon-menu")
const imgRotacionar = document.querySelector(".rotacionar")

let indexAtual: number = 0
let quantity: number = 0
let total: number = 0

function updateTotal(): number {
    const res = 125 * quantity

    return res
}

function createBtnRemoveCart(container: Element): HTMLButtonElement {

    const btnRemoveCart = document.createElement("button")
    btnRemoveCart.classList.add("btn-cart")
    btnRemoveCart.textContent = "Remove"

    btnRemoveCart.addEventListener("click", () => {
        container.innerHTML = ""
        btnRemoveCart.remove()
        textQuantity.classList.toggle("hide")
    })

    return btnRemoveCart

}

function createBtnSend(): Element {

    const btnSend = document.createElement("button")
    btnSend.classList.add("btn-cart")
    btnSend.textContent = "Send"

    btnSend.addEventListener("click", () => {
        window.open(`https://wa.me/${933677647}?text="Olá quero entrar em contato!"`)
    })

    return btnSend

}

function showModal(): void {
    fade.classList.toggle("hide")
    modal.classList.toggle("hide")
}

function removeImgAtual(index: number): void {
    const classAtivo = document.querySelector(".ativo")
    classAtivo.classList.remove("ativo")
    imgs[index].classList.add("ativo")
}

function removeThumbAtual(index: number): void {
    const classAtivo = document.querySelector(".active")
    classAtivo.classList.remove("active")
    thumbs[index].classList.add("active")
}

function removeImgPreview(index: number): void {
    const classAtived = document.querySelector(".atived")
    classAtived.classList.remove("atived")
    imgsPreview[index].classList.add("atived")
}

document.body.addEventListener("click", (event) => {

    if ((event.target as Element).closest(".btn-add")) { // type-asertion ou Afirmação de tipo

        if (quantity === 0) {
            return
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

        textQuantity.classList.remove("hide")
        textQuantity.textContent =  String(quantity)

        container.innerHTML = `
        <div class="conteudo-cart">
            <img class="thumb" src="./src/assets/images/image-product-1-thumbnail.jpg" alt=${indexAtual}>
            <div class="descricao">
                <p class="title">Fall Limited Edition Sneakers</p>
                <div class="container-price">
                    <p>$125.00 x 3</p>
                    <p>$${updateTotal()},00</p>
                </div>
            </div>
        </div>
        `

        container.append(
            createBtnRemoveCart(container),
            createBtnSend()
        )
    }

})

btns.forEach(btn => {
    btn.addEventListener("click", showModal)
})

btnModal.forEach((btn, index) => {

    btn.addEventListener("click", () => {

        if (index === 0) {
            indexAtual = indexAtual === 0 ? 3 : indexAtual -= 1
        } else if (index === 1) {
            indexAtual = indexAtual === 3 ? 0 : indexAtual += 1
        }

        removeImgAtual(indexAtual)
        removeThumbAtual(indexAtual)

    })

})

btnsQuantity.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        if (index === 0) {

            if (quantity <= 0) {
                alert("cannot be less than zero")
                return
            }

            quantity -= 1

        } else if (index === 1) {
            quantity += 1
        }

        value.textContent = String(quantity)
    })
})

btnClose.addEventListener("click", showModal)

btnPreview.forEach((btn,index) => {
    btn.addEventListener("click", () => {

        if (index === 0) {
            indexAtual = indexAtual === 0 ? 3 : indexAtual -= 1
        } else if (index === 1) {
            indexAtual = indexAtual === 3 ? 0 : indexAtual += 1
        }
    })
})

iconSideBar.addEventListener("click", () => {

    const imgMenu = "./src/assets/images/icon-menu.svg"
    const imgClose = "./src/assets/images/icon-close.svg"

    if (iconSideBar.getAttribute("src") === imgMenu) {
        iconSideBar.setAttribute("src", imgClose)
    } else {
        iconSideBar.setAttribute("src", imgMenu)
    }

})











































































































































































































































































































































































































