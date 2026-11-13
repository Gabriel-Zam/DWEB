function getMax() {
    let input = prompt("Insira or três números (separe em espaço)");
    input = input.split(' ').map(Number);

    let n1 = input[0];
    let n2 = input[1];
    let n3 = input[2];

    alert(Math.max(n1, n2, n3));
}

function ascOrder() {
    let input = prompt("Insira or três números (separe em espaço)");
    input = input.split(' ').map(Number);

    let n1 = input[0];
    let n2 = input[1];
    let n3 = input[2];

    if (n1 > n2) {let temp = n2; n2 = n1; n1 = temp;}
    if (n2 > n3) {let temp = n3; n3 = n2; n2 = temp;}

    alert(n1 + ' ' + n2 + ' ' + n3);
}

function isPalindrome() {
    let str = prompt("Insira a palavra");
    str = str.toUpperCase();
    str = str.split('').filter(e => e.trim().length).join('');

    let rev = str.split('').reverse().join('');
    if (rev == str) { alert("A palavra é um palíndromo"); }
    else { alert("A palavra não é um palíndromo"); }
}

function isSubset() {
    let sets = [];

    sets.push(prompt("Escreva uma palavra"));
    sets.push(prompt("Escreva outra palavra"));

    if (!sets[0] || !sets[1]) { alert("erro"); return; }
    if (sets[0].includes(sets[1])) { alert("Segunda palavra é subconjunto da primeira"); }
    else { alert("Segunda palavra não é subconjunto da primeira"); }
}

function getWeekday() {
    let data = prompt("Insira a data no seguinte formato: YYYY-MM-DD");
    let dia = new Date(data).getDay();
    dia = isNaN(dia) ? null : ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'][dia];
    alert(`Dia da semana: ${dia}`);
}