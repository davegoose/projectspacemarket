
    const fromProducts = [
      {img: "images/midnight-navy.jpg", h1: "Midnight Navy's", h2: "$210" },
      {img: "images/Retro High OG's.jpg", h1: "Retro High OG's", h2: "$229" },
      {img: "images/French Blue.jpg", h1: "French Blue kicks", h2: "$200" },
      {img: "images/Cherry Sneakers.jpeg", h1: "Jordan 11", h2: "$216", h3: "Quantity : 1" }
    ]
    function cartOpen() {
    var cartDiv = document.querySelector(".cart-container")
    var productsDiv = document.querySelector(".products-space")
    cartDiv.style.transform = "translateX(0)"
    productsDiv.style.transform = "translateX(10000px)"
  }
  function goHome() {
    var cartDiv = document.querySelector(".cart-container")
    var productsDiv = document.querySelector(".products-space")
    cartDiv.style.transform = "translateX(10000px)"
    productsDiv.style.transform = "translateX(0)"
  }
  function addToCart1() {
    var defaultValue = 2
    const productDiv = document.querySelector(".midnight-navy")
    const cartDiv = document.querySelector(".cart-item")
    let newDiv = document.createElement("li")
    newDiv.classList.add("newDiv")
    let cartImg = document.createElement("img")
    cartImg.src = fromProducts[0].img
    cartImg.classList.add("cart-img")
    let cartH1 = document.createElement("h1")
    cartH1.textContent = fromProducts[0].h1
    cartH1.classList.add("cart-h1")
    let cartH2 = document.createElement("h2")
    cartH2.textContent = fromProducts[0].h2
    cartH2.classList.add("cart-h2")
    let cartH3 = document.createElement("h3")
    cartH3.textContent = fromProducts[3].h3
    cartH3.classList.add("cart-h3")
    let deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-btn")
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    let toCheckOut = document.createElement("button")
    toCheckOut.classList.add("to-check-out-btn")
    toCheckOut.innerHTML = '<i class="fa-solid fa-money-check-dollar"></i>'
    let addItems = document.createElement("button")
    addItems.classList.add("add-items")
    addItems.innerHTML = '<i class="fa-solid fa-plus"></i>'
    addItems.addEventListener("click", function(e) {
      e.preventDefault() 
      cartH3.innerHTML = "Quantity: " + defaultValue++
      cartH2.innerHTML = "$" + (210 * defaultValue - 200)
    })
    newDiv.append(cartImg)
    newDiv.append(cartH1)
    newDiv.append(cartH2)
    newDiv.append(cartH3)
    newDiv.append(deleteBtn)
    newDiv.append(deleteBtn)
    newDiv.append(addItems)
    newDiv.append(toCheckOut)
    cartDiv.append(newDiv)
    deleteBtn.addEventListener("click", function() {
      newDiv.classList.toggle("fading")
      newDiv.addEventListener("transitionend", function(e) {
        e.preventDefault()
        newDiv.remove()
      })
    })
    
  }
  function addToCart2() {
    var defaultValue = 2
    const productDiv = document.querySelector(".midnight-navy")
    const cartDiv = document.querySelector(".cart-item")
    let newDiv = document.createElement("div")
    newDiv.classList.add("newDiv")
    let cartImg = document.createElement("img")
    cartImg.src = fromProducts[1].img
    cartImg.classList.add("cart-img")
    let cartH1 = document.createElement("h1")
    cartH1.textContent = fromProducts[1].h1
    cartH1.classList.add("cart-h1")
    let cartH2 = document.createElement("h2")
    cartH2.textContent = fromProducts[1].h2
    cartH2.classList.add("cart-h2")
    let cartH3 = document.createElement("h3")
    cartH3.textContent = fromProducts[3].h3
    cartH3.classList.add("cart-h3")
    let deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-btn")
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    let toCheckOut = document.createElement("button")
    toCheckOut.classList.add("to-check-out-btn")
    toCheckOut.innerHTML = '<i class="fa-solid fa-money-check-dollar"></i>'
    let addItems = document.createElement("button")
    addItems.classList.add("add-items")
    addItems.innerHTML = '<i class="fa-solid fa-plus"></i>'
    addItems.addEventListener("click", function(e) {
      e.preventDefault() 
      cartH3.innerHTML = "Quantity: " + defaultValue++
      cartH2.innerHTML = "$" + (229 * defaultValue - 200)
    })
    newDiv.append(cartImg)
    newDiv.append(cartH1)
    newDiv.append(cartH2)
    newDiv.append(cartH3)
    newDiv.append(deleteBtn)
    newDiv.append(addItems)
    newDiv.append(toCheckOut)
    cartDiv.append(newDiv)
    deleteBtn.addEventListener("click", function() {
      newDiv.classList.toggle("fading")
      newDiv.addEventListener("transitionend", function(e) {
        e.preventDefault()
        newDiv.remove()
      })
    })
  }
  function addToCart3() {
    var defaultValue = 2
    const productDiv = document.querySelector(".midnight-navy")
    const cartDiv = document.querySelector(".cart-item")
    let newDiv = document.createElement("div")
    newDiv.classList.add("newDiv")
    let cartImg = document.createElement("img")
    cartImg.src = fromProducts[2].img
    cartImg.classList.add("cart-img")
    let cartH1 = document.createElement("h1")
    cartH1.textContent = fromProducts[2].h1
    cartH1.classList.add("cart-h1")
    let cartH2 = document.createElement("h2")
    cartH2.textContent = fromProducts[2].h2
    cartH2.classList.add("cart-h2")
    let cartH3 = document.createElement("h3")
    cartH3.textContent = fromProducts[3].h3
    cartH3.classList.add("cart-h3")
    let deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-btn")
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    let toCheckOut = document.createElement("button")
    toCheckOut.classList.add("to-check-out-btn")
    toCheckOut.innerHTML = '<i class="fa-solid fa-money-check-dollar"></i>'
    let addItems = document.createElement("button")
    addItems.classList.add("add-items")
    addItems.innerHTML = '<i class="fa-solid fa-plus"></i>'
    addItems.addEventListener("click", function(e) {
      e.preventDefault() 
      cartH3.innerHTML = "Quantity: " + defaultValue++
      cartH2.innerHTML = "$" + (200 * defaultValue - 200)
    })
    newDiv.append(cartImg)
    newDiv.append(cartH1)
    newDiv.append(cartH2)
    newDiv.append(cartH3)
    newDiv.append(deleteBtn) 
    newDiv.append(addItems)
     newDiv.append(toCheckOut)
     cartDiv.append(newDiv)
    deleteBtn.addEventListener("click", function() {
      newDiv.classList.toggle("fading")
      newDiv.addEventListener("transitionend", function(e) {
        e.preventDefault()
        newDiv.remove()
      })
    })
  }
  function addToCart4() {
    var defaultValue = 2
    const productDiv = document.querySelector(".midnight-navy")
    const cartDiv = document.querySelector(".cart-item")
    let newDiv = document.createElement("div")
    newDiv.classList.add("newDiv")
    let cartImg = document.createElement("img")
    cartImg.src = fromProducts[3].img
    cartImg.classList.add("cart-img")
    let cartH1 = document.createElement("h1")
    cartH1.textContent = fromProducts[3].h1
    cartH1.classList.add("cart-h1")
    let cartH2 = document.createElement("h2")
    cartH2.textContent = fromProducts[3].h2
    cartH2.classList.add("cart-h2")
    let cartH3 = document.createElement("h3")
    cartH3.textContent = fromProducts[3].h3
    cartH3.classList.add("cart-h3")
    let deleteBtn = document.createElement("button")
    deleteBtn.classList.add("delete-btn")
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    let toCheckOut = document.createElement("button")
    toCheckOut.classList.add("to-check-out-btn")
    toCheckOut.innerHTML = '<i class="fa-solid fa-money-check-dollar"></i>'
    let addItems = document.createElement("button")
    addItems.classList.add("add-items")
    addItems.innerHTML = '<i class="fa-solid fa-plus"></i>'
    newDiv.append(cartImg)
    newDiv.append(cartH1)
    newDiv.append(cartH2)
    newDiv.append(cartH3)
    newDiv.append(deleteBtn)
    newDiv.append(addItems)  
    newDiv.append(toCheckOut)  
    cartDiv.append(newDiv)
    addItems.addEventListener("click", function(e) {
      e.preventDefault() 
      cartH3.innerHTML = "Quantity: " + defaultValue++
      cartH2.innerHTML = "$" + (216 * defaultValue)
    })
    deleteBtn.addEventListener("click", function() {
      newDiv.classList.toggle("fading")
      newDiv.addEventListener("transitionend", function(e) {
        e.preventDefault()
        newDiv.remove()
      })
    })
  }