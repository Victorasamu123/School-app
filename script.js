let studentPortal = [];
function nextPage(){
    let firstInput = document.getElementById("firstname").value;
    let secondInput = document.getElementById("lastname").value;
    let thirdInput = document.getElementById("email").value;
    let fourthInput = document.getElementById("password").value;
    let dis = document.getElementById("checkOut")

    let newStudent = {
        firstName:firstInput,
        lastName:secondInput,
        email:thirdInput,
        passWord:fourthInput
    }
    studentPortal.push(newStudent);
    localStorage.setItem("localstudentPortal",JSON.stringify(studentPortal))
            console.log(studentPortal)
    firstname.value = " ";
    lastname.value = " ";
    email.value = " ";
    password.value = " ";
    if (firstInput == " " && secondInput == " " && thirdInput == " " && fourthInput == " ") {
        dis.innerText = "Please fill out dis form with correct input"
    }else{
        window.location.href = "sign in.html"
    }
    
}

function getPreviousValue(){
    if (localStorage.localstudentPortal) {
        studentPortal = JSON.parse(localStorage.localstudentPortal)
    }
}
function goToIn() {
    window.location.href = "sign in.html"
}
function goToUp(){
    window.location.href = "index.html"
}