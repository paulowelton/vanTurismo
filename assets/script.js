function redirect(url){
    window.location.href = url
}

function animation(txt1,txt2,txt3){
    txt1.classList.add('teste');
    txt2.classList.add('teste');
    txt3.classList.add('teste');
    setTimeout(()=>{
        txt1.classList.remove('teste');
        txt2.classList.remove('teste');
        txt3.classList.remove('teste');
    }, 1000);
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
        animation(txt1,txt2,txt3);
    }
    else if(radio2.checked == true){
        apr.style.marginLeft = "0"
        radio2.checked = false
        radio1.checked = true
        animation(txt1,txt2,txt3);
    }
    else if(radio3.checked == true){
        apr.style.marginLeft = "-100%"
        radio3.checked = false
        radio2.checked = true
        animation(txt1,txt2,txt3);
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
        animation(txt1,txt2,txt3);
    }
    else if(radio2.checked == true){
        apr.style.marginLeft = "-200%"
        radio2.checked = false
        radio3.checked = true
        animation(txt1,txt2,txt3);
    }
    else if(radio3.checked == true){
        apr.style.marginLeft = "0"
        radio3.checked = false
        radio1.checked = true
        animation(txt1,txt2,txt3);
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

