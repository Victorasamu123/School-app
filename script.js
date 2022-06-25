let studentPortal = [];
function nextPage(){
    let firstInput = document.getElementById("firstname").value;
    let secondInput = document.getElementById("lastname").value;
    let thirdInput = document.getElementById("email").value;
    let fourthInput = document.getElementById("password").value;

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
    window.location.href = "sign in.html"
}

function getPreviousValue(){
    if (localStorage.localstudentPortal) {
        studentPortal = JSON.parse(localStorage.localstudentPortal)
    }
}
