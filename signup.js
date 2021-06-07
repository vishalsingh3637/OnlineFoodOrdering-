function signupcheck(e) {
    e.preventDefault()
    // alert("signup Wirking")
    let form = document.getElementById("signup-form")
    let name = form.name.value
    let email = form.email.value
    let password = form.password.value
    if (name == "" || name == "" || password == "") {
        alert("Fill All Dedails")
    } else {
        //console.log(name,email,password)
        let ob = {
            name,
            email,
            password
        }
       // console.log(userdata)
        let ar;
        ar = localStorage.getItem('userdata')
        if (ar == null) {
            ar = []
        } else {
            ar=JSON.parse(ar)
        }
        ar.push(ob);
        localStorage.setItem('userdata',JSON.stringify(ar))










    }

}