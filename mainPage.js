'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//メール通知
 function mailAndPassCheck(){
    const inputMail = document.getElementsByName("mail")[0].value;
    if(inputMail !== "sho_hayashida@mail.toyota.co.jp"){
        window.alert("Wrong e-mail address. Try again.");
    }else{
        window.alert("Your e-mail address has been registered.");
    }
}
 const mailTry = document.getElementById("btnMail");
 mailTry.addEventListener("click",mailAndPassCheck);


//進捗確認変更
function addCheckMarkToGRVA1(){
    document.getElementById("statusGRVA1").innerText = "🙆‍♀️✅🙆‍♂️";
}
    const loadGRVA1 = document.getElementById("docGRVA1");
    loadGRVA1.addEventListener("click",addCheckMarkToGRVA1);

function addCheckMarkToGRVA2(){
    document.getElementById("statusGRVA2").innerText = "🙆‍♀️✅🙆‍♂️";
}
    const loadGRVA2 = document.getElementById("docGRVA2");
    loadGRVA2.addEventListener("click",addCheckMarkToGRVA2);

function addCheckMarkToGRBP1(){
    document.getElementById("statusGRBP1").innerText = "🙆‍♀️✅🙆‍♂️";
}
    const loadGRBP1 = document.getElementById("docGRBP1");
    loadGRBP1.addEventListener("click",addCheckMarkToGRBP1);


//まとめ説明


// let s = document.querySelector('futureWork');
let s = document.getElementById('futureWork');
s.setAttribute('hidden', '');

function showup(){
    s.removeAttribute('hidden', '');
}
    const progress = document.getElementById("summary");
    progress.addEventListener("click",showup);


