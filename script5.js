let aleatorio = Math.ceil(Math.random() * 100);
let tentativasMax = 10;
let tentativasRestantes = tentativasMax;
let finalizado = false;
const limparCampos = () => document.getElementById('palpite').value = '';
let historicoPalpites = [];


function adivinhar() {

    document.getElementById('tentativa').play();
    
    if (finalizado == true){

        resetarPrograma();

        return;
    }
    
    const palpite = parseInt(document.getElementById('palpite').value);

    if (isNaN(palpite)) {

        document.getElementById('').textContent = 'Digite um valor valido!!';

        return;

    } if (palpite > aleatorio) {
    
        document.getElementById('dicas').textContent = 'O numero secreto e menor que ' + palpite;
        document.getElementById('tentativas').textContent = 'voce possui mais ' + tentativasRestantes + ' tentativas.';

    } else if (palpite < aleatorio){
    
        document.getElementById('dicas').textContent = 'O numero secreto e maior que ' + palpite;
        document.getElementById('tentativas').textContent = 'voce possui mais ' + tentativasRestantes + ' tentativas.';

    } else if (palpite == aleatorio) {

        document.getElementById('dicas').textContent = 'voce ganhou!!!';
        document.getElementById('ganhou').play();

        finalizado = true;

        document.getElementById('botao').textContent = 'reiniciar';

        return;
    }  

    tentativasRestantes--;

    if (tentativasRestantes > 0) {

        document.getElementById('tentativas').textContent = 'Ainda restam mais ' + tentativasRestantes;

    } else {

        document.getElementById('dicas').textContent = 'Suas tentativas acabaram!';
        document.getElementById('tentativas').textContent = 'voce perdeu!!! o numero correto era ' + aleatorio + '!';
        document.getElementById('perda').play();

        finalizado = true;

        document.getElementById('botao').textContent = 'reiniciar';

        return;
    }

    historicoPalpites.push(palpite);
    document.getElementById('historico').textContent = 'Palpites anteriores: ' + historicoPalpites.join(',');

    limparCampos();

}

const resetarPrograma = () => {

    finalizado = false;
    tentativasRestantes = 10;
    historicoPalpites.length = 0;

    document.getElementById('palpite').value = '';
    document.getElementById('botao').textContent = 'Chutar!!! ';
    document.getElementById('dicas').textContent = 'Dicas!!! ';
    document.getElementById('tentativas').textContent = 'Tentativas restantes: ';
    document.getElementById('historico').textContent = 'Palpites anteriores: '
}