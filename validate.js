
function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name == "" || email == "") {
        alert("Please fill all fields");
        return false;
    }

    else if (!email.includes("@")) {
        alert("enter valid email");
        return false;
    }

    else {
        alert("Form Submitted Successfully");
        return true;
    }

}
