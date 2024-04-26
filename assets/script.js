function redirect(url){
    window.location.href = url
}

let apr = document.querySelector(".apresentacao");

let radio1 = document.querySelector("#radio1")
let radio2 = document.querySelector("#radio2")
let radio3 = document.querySelector("#radio3")

radio1.checked = true

// setInterval(() => {
//     if(radio1.checked == true){
//         apr.style.marginLeft = "-100%"
//         radio1.checked = false
//         radio2.checked = true
//     }
//     else if(radio2.checked == true){
//         apr.style.marginLeft = "-200%"
//         radio2.checked = false
//         radio3.checked = true
//     }
//     else if(radio3.checked == true){
//         apr.style.marginLeft = "0"
//         radio3.checked = false
//         radio1.checked = true
//     }
    
// }, 6000);

let voltar = document.querySelector(".voltar").addEventListener("click",()=>{
    if(radio1.checked == true){
        apr.style.marginLeft = "-200%"
        radio1.checked = false
        radio3.checked = true
    }
    else if(radio2.checked == true){
        apr.style.marginLeft = "0"
        radio2.checked = false
        radio1.checked = true
    }
    else if(radio3.checked == true){
        apr.style.marginLeft = "-100%"
        radio3.checked = false
        radio2.checked = true
    }
})

let txt1 = document.querySelector(".txt1")
let txt2 = document.querySelector(".txt2")
let txt3 = document.querySelector(".txt3")

let ir = document.querySelector(".ir").addEventListener("click",()=>{
    if(radio1.checked == true){
        apr.style.marginLeft = "-100%"
        radio1.checked = false
        radio2.checked = true
        txt2.style.animation = "animation: teste 1s ease-in-out forwards;"
        txt1.style.animation = "animation: teste 1s ease-in-out forwards;"
        txt3.style.animation = "animation: teste 1s ease-in-out forwards;"
    }
    else if(radio2.checked == true){
        apr.style.marginLeft = "-200%"
        radio2.checked = false
        radio3.checked = true
        txt3.style.animation = "animation: teste 1s ease-in-out forwards;"
        txt1.style.animation = "animation: teste 1s ease-in-out forwards;"
        txt2.style.animation = "animation: teste 1s ease-in-out forwards;"
    }
    else if(radio3.checked == true){
        apr.style.marginLeft = "0"
        radio3.checked = false
        radio1.checked = true
        txt1.style.animation = "animation: teste 1s ease-in-out forwards;"
        txt2.style.animation = "animation: teste 1s ease-in-out forwards;"
        txt3.style.animation = "animation: teste 1s ease-in-out forwards;"
    }
})

let menu = document.querySelector(".menu-ul")
let button_menu = document.querySelector(".button-menu").addEventListener("click",()=>{
    if(menu.style.display == "block"){
        menu.style.display = "none"
    }
    else{
        menu.style.display = "block"
    }
})

let contato = document.querySelectorAll(".ctt")

contato.forEach(element => {
    element.addEventListener("click",()=>{
        Swal.fire({
            html: "<label id='tit'>Deseja entrar em contato com nossa equipe?</label>" + "<br><label id='desc'>Basta clicar neste botão e ser redirecionado ao whatsapp da nossa Agência</label>" +
            "<div id='cont-wpp'>" + "<button id='wpp'><img src='files/wpp.png'></img>Entrar em Contato</button>" + "</div>",
            didOpen: () => {
                let wpp = document.querySelector("#wpp").addEventListener("click", ()=>{
                    redirect('https://wa.me/5585986061468')
                })    
            }
        });
    })
});

let wpp = document.querySelector(".wapp").addEventListener("click",()=>{
    redirect('https://wa.me/5585986061468')
    
})

