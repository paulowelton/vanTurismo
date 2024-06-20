function redirect(url){
    window.location.href = url
}

let apr = document.querySelector(".apresentacao");

let radio1 = document.querySelector("#radio1")
let radio2 = document.querySelector("#radio2")
let radio3 = document.querySelector("#radio3")

radio1.checked = true

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

let ir = document.querySelector(".ir").addEventListener("click",()=>{
    if(radio1.checked == true){
        apr.style.marginLeft = "-100%"
        radio1.checked = false
        radio2.checked = true
    }
    else if(radio2.checked == true){
        apr.style.marginLeft = "-200%"
        radio2.checked = false
        radio3.checked = true
    }
    else if(radio3.checked == true){
        apr.style.marginLeft = "0"
        radio3.checked = false
        radio1.checked = true
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

