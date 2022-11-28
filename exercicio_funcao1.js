/*
    2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre
    a condição de peso de uma pessoa adulta.

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condiç~çao de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 26 e 30 Acima do peso;
    - Entre 31 e 40 Obeso;
    - Acima de 40 Obesidade Grave;
*/

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarIMC(IMC) {
    if(IMC < 18.5) {
        return 'Você está abaixo do peso';
    } else if(IMC >= 18.5 && IMC <= 25) {
        return 'Você está com o peso normal';
    } else if(IMC >= 26 && IMC <= 30) {
        return 'Você está acima do peso';
    } else if(IMC >= 31 && IMC <= 40) {
        return 'Você está obeso';
    } else {
        return 'Você está com obesidade grave';
    }
}

// Main
(function () {
    const peso = 96;
    const altura = 1.90;
    
    const IMC = calcularIMC(peso, altura);
    console.log(classificarIMC(IMC));
    
})();


