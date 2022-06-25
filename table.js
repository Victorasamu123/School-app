let newestValue = JSON.parse(localStorage.localstudentPortal);
console.log(newestValue)
function provideTable(){
    console.log(newestValue)
    let tab = "";
    for (let i = 0; i < newestValue.length; i++) {
       tab +=`<tr><td> ${i+1} </td><td> ${newestValue[i].firstName} </td><td> ${newestValue[i].lastName} </td><td> ${newestValue[i].email} </td><td> ${newestValue[i].passWord} </td></tr>`
        
    }
    document.getElementById("tbody").innerHTML = tab
}