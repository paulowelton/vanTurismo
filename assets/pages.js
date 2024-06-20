let radio1 = document.querySelector("#radio1");
let radio2 = document.querySelector("#radio2");
let radio3 = document.querySelector("#radio3");
let radio4 = document.querySelector("#radio4");
let radio5 = document.querySelector("#radio5");
let fotos = document.querySelector(".slides");

radio1.checked = true;

function avancarSlide() {
    if (radio1.checked) {
        radio1.checked = false;
        radio2.checked = true;
        fotos.style.marginLeft = "-100%";
    } else if (radio2.checked) {
        radio2.checked = false;
        radio3.checked = true;
        fotos.style.marginLeft = "-200%";
    } else if (radio3.checked) {
        radio3.checked = false;
        radio4.checked = true;
        fotos.style.marginLeft = "-300%";
    } else if (radio4.checked) {
        radio4.checked = false;
        radio5.checked = true;
        fotos.style.marginLeft = "-400%";
    } else if (radio5.checked) {
        radio5.checked = false;
        radio1.checked = true;
        fotos.style.marginLeft = "0";
    }
}

// Função para voltar os slides
function voltarSlide() {
    if (radio1.checked) {
        radio1.checked = false;
        radio5.checked = true;
        fotos.style.marginLeft = "-400%";
    } else if (radio2.checked) {
        radio2.checked = false;
        radio1.checked = true;
        fotos.style.marginLeft = "0";
    } else if (radio3.checked) {
        radio3.checked = false;
        radio2.checked = true;
        fotos.style.marginLeft = "-100%";
    } else if (radio4.checked) {
        radio4.checked = false;
        radio3.checked = true;
        fotos.style.marginLeft = "-200%";
    } else if (radio5.checked) {
        radio5.checked = false;
        radio4.checked = true;
        fotos.style.marginLeft = "-300%";
    }
}

function reservar(){
    Swal.fire({
        html: "<label id='tit'>Deseja reservar um passeio?</label>" + "<br><label id='desc'>Basta clicar neste botão e ser redirecionado ao whatsapp da nossa Agência</label>" +
        "<div id='cont-wpp'>" + "<button id='wpp'><img src='../files/wpp.png'></img>Entrar em Contato</button>" + "</div>",
        didOpen: () => {
            let wpp = document.querySelector("#wpp").addEventListener("click", ()=>{
                redirect('https://wa.me/5585986061468')
            })    
        }
    });
}

function redirect(url){
    window.location.href = url;
}

document.getElementById("ir").addEventListener("click", avancarSlide);
document.getElementById("voltar").addEventListener("click", voltarSlide);
document.querySelector("#reservar").addEventListener("click", reservar);





