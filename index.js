let products = {
    data: [
        {
            name: "MATRIX 1999 DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/matrix-1999-1.jpg"
        },

        {
            name: "RAEDA DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Raeda-Deck.jpg"
        },

        {
            name: "MUSTY DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Musty-Deck.jpg"
        },

        {
            name: "TRISTIQUE DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Tristique-deck.jpg"
        },

        {
            name: "FIELD TRIP DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Fied-Trip-deck.jpg"
        },

        {
            name: "TARO RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-5.jpg"
        },

        {
            name: "NEON RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-1.jpg"
        },

        {
            name: "ORANAGE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-2.jpg"
        },

        {
            name: "BLUE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-3.jpg"
        },

        {
            name: "WHITE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-4.jpg"
        },

        {
            name: "CUTIS MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cutis.jpg"
        },

        {
            name: "CAM VU MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cam-vu.jpg"
        },

        {
            name: "SON NGUYEN MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/son-nguyen.jpg"
        },
    ]
}

for (var item of products.data) {
    console.log(item.image)
    console.log(item.name)
    console.log(item.price)

    var card = document.createElement('div')
    card.classList.add('product-card')
    document.getElementById('product').appendChild(card)

    // Image
    var image = document.createElement('div')
    image.classList.add('image')
    card.appendChild(image)

    var img = document.createElement('img')
    image.appendChild(img)
    img.setAttribute("src", item.image)
    img.setAttribute("alt", item.name)
    
    // Name
    var title = document.createElement('h3')
    title.classList.add('name')
    card.appendChild(title)
    title.innerText = item.name

    // Price
    var price = document.createElement('p')
    price.classList.add('price')
    card.appendChild(price)
    price.innerHTML = "<b>Giá: </b>" + item.price

    // Button
    var btn = document.createElement('button')
    btn.classList.add('btn')
    card.appendChild(btn)
    btn.innerText = "Thêm vào giỏ hàng"

}


