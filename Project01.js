var intervald = window.setInterval(() => {load()        // Fazer o relógio contar
},1000);


                                                        // Função de printar na tela a imagem + texto
function load(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()

    msg.innerHTML = `Agora são ${hora}:${minuto} horas e ${segundo} segundos. <hr>`  //  msg.innetHTML = printe a seguinte mensagem dentro da ID 'msg'

    if(hora >= 0 && hora < 12){          // Se for de manhã
        img.src = 'manha.png'
        document.body.style.background = '#FF4500'
    } else if (hora >= 12 && hora < 18){ // Se for no meio da tarde
        img.src = 'tarde.png'
        document.body.style.background = '#228B22'
    } else {                             // Se for de noite
        img.src = 'noite.png'
        document.body.style.background = '#708090'
    } 
}

