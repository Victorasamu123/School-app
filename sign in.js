function thirdPage(){
    let newValue = JSON.parse(localStorage.localstudentPortal);
    let nextValue = document.getElementById("mail").value;
    let nnValue = document.getElementById("word").value;
    let div = document.getElementById("good");
    console.log(newValue)

    for (let index = 0; index < newValue.length; index++) {
        if (nextValue == newValue[index].email && nnValue == newValue[index].passWord) {
            window.location.href = "table.html"
        }else{
            div.innerText = "invalid input"
        }
    }
    mail.value = " ";
    word.value = " ";
    
}