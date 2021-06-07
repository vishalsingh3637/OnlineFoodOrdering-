function addinminur(e) {
    e.preventDefault()
    //alert("Added")
    let form = document.getElementById("aditem-menu")
    let name = form.name.value
    let price = form.price.value
    let description = form.description.value
    let time = form.time.value
    let image = form.image.value
    
    if (name == "" || price == "" || description == "" || time == "" || image == "") {
        alert("Add full details")
    } else {
        let itemdit = {
            name,
            price,
            description,
            time,
            image
        }
        console.log(itemdit)
        let array;
        array = localStorage.getItem('fooddata')
        if (array == null) {
            array = []
        } else {
            array = JSON.parse(array)
        }
        array.push(itemdit);
        localStorage.setItem('fooddata', JSON.stringify(array))
    }
}
function showfood() {
    let data = JSON.parse(localStorage.getItem('fooddata'))
    
    let par = document.getElementById('item-show-part')
    
    data.forEach(element => {
        let div = document.createElement('div')
        
        let image = document.createElement('image')
        image.src = element.image
        
        let p_n_t = document.createElement('p')
        p_n_t.innerHTML = `Name ${element.name} Time to pre${element.time}`
        
        let p_di = document.createElement('p')
        p_di.innerHTML = element.description

        let p_price = document.createElement('p')
        p_price.innerHTML = `price ${element.price}`
        let cartbtn = document.createElement('button')
        cartbtn.innerHTML = 'add to cart'
        cartbtn.onclick = function () {
            adcart(element)
        }
        
        div.append(image, p_n_t, p_di, p_price,cartbtn)
        par.append(div)

    });
}
showfood()
function adcart(data) {
    let ar;
    ar = localStorage.getItem('cartdata')
    if (ar == null) {
        ar = []
    } else {
        ar.JSON.parse(ar)
    }
    let alrady = false
    for (let j = 0; j < ar.length; j++) {
        if (ar[j].name === data.name) {
            alert("itrm alrady in cart")
            alrady = true
            break
        }
        
    }
    if (!alrady) {
        ar.push(data);
    }
    localStorage.setItem('cartdata',JSON.stringify(ar))
}
