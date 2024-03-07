let pantalla = document.getElementById('pantalla');
let operando1 = '';
let operando2 = '';
let operacionPendiente = null;

function limpiarPantalla() {
    pantalla.textContent = '';
    operando1 = '';
    operando2 = '';
    operacionPendiente = null;
}

function agregarDigito(digito) {
    pantalla.textContent += digito;
    if (operacionPendiente === null) {
        operando1 += digito;
    } else {
        operando2 += digito;
    }
}

function agregarDecimal() {
    if (!pantalla.textContent.includes('.')) {
        pantalla.textContent += '.';
        if (operacionPendiente === null) {
            operando1 += '.';
        } else {
            operando2 += '.';
        }
    }
}

function cambiarSigno() {
    if (pantalla.textContent !== '' && pantalla.textContent !== '0') {
        if (pantalla.textContent.charAt(0) === '-') {
            pantalla.textContent = pantalla.textContent.slice(1);
            if (operacionPendiente === null) {
                operando1 = pantalla.textContent;
            } else {
                operando2 = pantalla.textContent;
            }
        } else {
            pantalla.textContent = '-' + pantalla.textContent;
            if (operacionPendiente === null) {
                operando1 = pantalla.textContent;
            } else {
                operando2 = pantalla.textContent;
            }
        }
    }
}

function agregarPorcentaje() {
    if (pantalla.textContent !== '' && pantalla.textContent !== '0') {
        let valor = parseFloat(pantalla.textContent) / 100;
        pantalla.textContent = valor.toString();
        if (operacionPendiente === null) {
            operando1 = valor.toString();
        } else {
            operando2 = valor.toString();
        }
    }
}

function agregarOperador(operador) {
    operacionPendiente = operador;
    pantalla.textContent += operador;
}

function calcularResultado() {
    let resultado;
    let op1 = parseFloat(operando1);
    let op2 = parseFloat(operando2);
    switch (operacionPendiente) {
        case '+':
            resultado = op1 + op2;
            break;
        case '-':
            resultado = op1 - op2;
            break;
        case 'X':
            resultado = op1 * op2;
            break;
        case '÷':
            resultado = op1 / op2;
            break;
        default:
            resultado = 'Error';
    }
    pantalla.textContent = resultado.toString();
    operando1 = resultado.toString();
    operando2 = '';
    operacionPendiente = null;
}
