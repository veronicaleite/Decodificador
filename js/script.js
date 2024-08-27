document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal")
    const btModal = document.getElementById("btModal")

    const noMessage = document.getElementById("noMessage")
    const outputText = document.getElementById("outputText")

    const btCrip = document.getElementById("btCrip")
    const btDescrip = document.getElementById("btDescrip")
    const btCopiar = document.getElementById("btCopiar")

    btCrip.addEventListener('click', ()=>codificar())
    btDescrip.addEventListener('click', ()=>decodificar())
    btCopiar.addEventListener('click', ()=>copiarTexto())

    modal.showModal()
    btModal.addEventListener('click', ()=>{
        modal.close();
    });

});

function codificar() {
    let texto = document.getElementById("inputText").value
    let textoCodificado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    outputText.value = ''
    outputText.value = textoCodificado

    if (outputText.value === '') {
        noMessage.style.display = 'block';
        outputText.style.display = 'none'
        btCopiar.style.display = 'none'; 
    } else {
        noMessage.style.display = 'none';
        outputText.style.display = 'block'
        btCopiar.style.display = 'inline-block';
    }
}

function decodificar() {
    let textoCodificado = document.getElementById("inputText").value
    let texto = textoCodificado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    outputText.value = ''
    outputText.value = texto

    if (outputText.value === '') {
        noMessage.style.display = 'block';
        outputText.style.display = 'none'
        btCopiar.style.display = 'none'; 
    } else {
        noMessage.style.display = 'none';
        outputText.style.display = 'block'
        btCopiar.style.display = 'inline-block';
    }
}

function copiarTexto() {
    let textoCodificado = outputText.value;

    navigator.clipboard.writeText(textoCodificado)
}