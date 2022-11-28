/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
    e a escolha da condição de pagamento.
    Utilize os códigos de tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
    adequado.
    Código Condição de pagamento:
    - 1. A vista Débito, recebe 10% de desconto;
    - 2. A vista no Dinheiro ou PIX, recebe 15% de desconto;
    - 3. Em duas vezes, preço normal de etiqueta sem juros;
    - 4. Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}


const valorProduto = 37;
const metodoPagamento = 1;


if(metodoPagamento === 1) {
    aplicarDesconto(valorProduto, 10);
} else if(metodoPagamento === 2) {
    aplicarDesconto(valorProduto, 15);
} else if(metodoPagamento === 3) {
    console.log(valorProduto);
} else {
    aplicarJuros(valorProduto, 10)
}