const form = document.getElementById('formatividade')
const imgAprovado = '<img src="./images/aprovado.png" alt = "emoji festejando" />'
const imgreprovado = '<img src="./images/reprovado.png" alt = "emoji triste" />'
const atividades = [];
const notas = [];
const spanAprovado = '<span class = "resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class = "resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota minima:"))

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();
    atualizatabela();
    atualizamedia();

})

function adicionalinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    } else {
    

    atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value))

    let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgreprovado}</td>`
    linha += '</tr>'

    linhas += linha
}

    inputNotaAtividade.value = ''
    inputNomeAtividade.value = ''
}

function atualizatabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizamedia() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i]
}

return somaDasNotas / notas.length

}