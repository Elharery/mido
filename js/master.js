let body = document.querySelector("body");
let pseudo = document.querySelector("section .pseudo");
let pseudo2 = document.querySelector("section .pseudo2");
let section = document.querySelector("section");
let texts = document.querySelector("section .texts");
pseudo2.addEventListener('click', ()=>{
        if(pseudo2.style.top != "35px"){
            pseudo2.style.top = "35px" ;
            pseudo.style.background = "#0075ff";
            body.style.background = "#000";
            section.style.background = "#000";
            texts.style.color = "#fff";
        }else{
            pseudo2.style.top = "5px" ;
            pseudo.style.background = "#eee";
            body.style.background = "#ffff";
            section.style.background = "#fff";
            texts.style.color = "#000";
        }
});