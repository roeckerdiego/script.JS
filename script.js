const pisca = document.getElementById("pisca");

function acender(){
    pisca.src = "piscaon.png";
    document.body.style.background ="#f4f4f4"
}
function apagar(){   
    pisca.src = "piscaoff.png";
    document.body.style.background = "#222"
}
function automatico(){
    let estado =0;
    intervalo = setInterval(()=>{
        if(estado === 0) acender();
        else if(estado === 1) apagar();
        estado = (estado + 1) % 2;
    }, 150)
}
function parar(){
    clearInterval(intervalo);
    limpar();
}

btnAcender.onclick = acender;
btnApagar.onclick = apagar;
btnAuto.onclick = automatico;
btnParar.onclick = parar;