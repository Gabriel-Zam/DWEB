do {
    let nome = prompt("Insira o nome do aluno");
    let media = 0.00;

    for (let i = 0; i < 4; i++) media += parseFloat(prompt("Insira a nota " + (i+1)));
    media /= 4.00;

    alert("Médica aritmética das notas de " + nome + ": " + Number(media).toFixed(2));

    var continuar = confirm("Deseja prosseguir?");
} while(continuar);