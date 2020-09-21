export const operadoresValidos = ['+', '-', '×', '÷'];

export const naoNumeros = operadoresValidos.concat(['.', '=', 'C', 'CE', '=/-']);

export const retornarResultadoGeral = (numeros: string[], operadores: string[]): string => {
    let resultado = numeros[0];

    numeros.forEach((numero, index) => {
        if (operadores[index - 1]) {
            resultado = retornarResultadoIndividual(operadores[index - 1], resultado, numero);
        }
    });

    try {
        return resultado;
    } catch (error) { }

    return resultado;
};


export const retornarResultadoIndividual = (operador: string, numero1: string, numero2: string): string => {
    let resultado: number;

    if (operador === '÷') {
        resultado = (numero1 === undefined) ? parseFloat(numero2) : parseFloat(numero1) / parseFloat(numero2);
    }
    if (operador === '×') {
        resultado = (numero1 === undefined) ? parseFloat(numero2) : parseFloat(numero1) * parseFloat(numero2);
    }
    if (operador === '-') {
        resultado = (numero1 === undefined) ? parseFloat(numero2) : parseFloat(numero1) - parseFloat(numero2);
    }
    if (operador === '+') {
        resultado = (numero1 === undefined) ? parseFloat(numero2) : parseFloat(numero1) + parseFloat(numero2);
    }

    return resultado.toString();
};


export const posicionarScrollbar = () => {
    const $display = document.querySelector('.display');
    const $historico = document.querySelector('.historico');

    $display.scrollLeft = $display.scrollWidth;
    $historico.scrollLeft = $historico.scrollWidth;
};
