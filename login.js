function logincheck(e) {
    e.preventDefault()
    let form = document.getElementById("login-form")
    let email = form.email.value
    let password = form.password.value
    if (email == "" || password == "") {
        alert('fill all Details')
    } else {
        let data = JSON.parse(localStorage.getItem('userdata'))
        //console.log(email,password,data)
        let useris=false
        for (let j = 0; j < data.length; j++) {
            console.log(data[j].email)
            if (data[j].email === email && data[j].password === password) {
                useris = true
                break;
            }
            
        }
        console.log(useris)
        if (useris) {

        window.location.href = "index.html"
        } else {
            alert("Data Noi match")
        }
    }
}