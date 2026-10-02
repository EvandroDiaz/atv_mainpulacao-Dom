function calculadora(num1, operador, num2) {
    if (operador === "+") {
        return num1 + num2;
    } else if (operador === "-") {
        return num1 - num2;
    } else if (operador === "*") {
        return num1 * num2;
    } else if (operador === "/") {
        if (num2 === 0) {
            return "Erro: divisão por zero!";
        }
        return num1 / num2;
    } else {
        return "Operador inválido!";
    }
}


console.log(calculadora(10, "+", 5));
console.log(calculadora(10, "-", 5));
console.log(calculadora(10, "*", 5));
console.log(calculadora(10, "/", 5));