'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function mailAndPassCheck(){
    let result = "";
    const inputMail = document.getElementsByName("mail")[0].value;
    const inputPassword = document.getElementsByName("password")[0].value;
    if(inputMail !== "sho_hayashida@mail.toyota.co.jp"){
        window.alert("This e-mail address is not registered.");
        document.getElementById("passCheck").action = "./index.html";
    }
    if(inputPassword !== "000000"){
        window.alert("Wrong password.");
        document.getElementById("passCheck").action = "./index.html";
    }
    console.log(result);

}
 
 const loginTry = document.getElementById("btnLogin");
 loginTry.addEventListener("click",mailAndPassCheck);
 

