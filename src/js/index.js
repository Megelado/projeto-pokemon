const btnavançar = document.getElementById('btn-avançar');
const cartoes = document.querySelectorAll('.cartao');
let atualcartao = 0;

 function escondeselect() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
 }
 function mostreselect (indiceCartao) {
    cartoes[indiceCartao].classList.add("selecionado");
 }
btnavançar.addEventListener('click', function (){
    if(atualcartao === cartoes.length -1) return

    escondeselect();

    atualcartao++;
    mostreselect (atualcartao);
});
const btnVoltar = document.getElementById('btn-voltar');
btnVoltar.addEventListener("click", function(){

    if(atualcartao === 0) return

    escondeselect();

    atualcartao--;
    mostreselect (atualcartao); 
});

