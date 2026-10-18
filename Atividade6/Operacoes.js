do {
    let n1 = parseFloat(prompt("Insira um número"));
    let n2 = parseFloat(prompt("Insira outro número"));

    alert(n1 + " + " + n2 + " = " + (n1+n2));
    alert(n1 + " - " + n2 + " = " + (n1-n2));
    alert(n1 + " * " + n2 + " = " + (n1*n2));
    alert(n1 + " / " + n2 + " = " + (n1/n2));
    alert(n1 + " % " + n2 + " = " + (n1%n2));

    var continuar = confirm("Deseja prosseguir?");
} while(continuar);
