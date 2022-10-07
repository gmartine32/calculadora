(() => {
  const historial = [];

  const btn = document.getElementById("cero");
  const btn1 = document.getElementById("uno");
  const btn2 = document.getElementById("dos");
  const btn3 = document.getElementById("tres");
  const btn4 = document.getElementById("cuatro");
  const btn5 = document.getElementById("cinco");
  const btn6 = document.getElementById("seis");
  const btn7 = document.getElementById("siete");
  const btn8 = document.getElementById("ocho");
  const btn9 = document.getElementById("nueve");
  const btnPunto = document.getElementById("punto");
  const btnSumar = document.getElementById("sumar");
  const btnRestar = document.getElementById("restar");
  const btnMultiplicar = document.getElementById("multiplicar");
  const btnDividir = document.getElementById("dividir");
  const btnIgual = document.getElementById("igual");
  const btnAC = document.getElementById("ac");
  const btnBorrar = document.getElementById("borrar");
  const btnBorrarHistory = document.getElementById("bHistorial");

  const labelResult = document.getElementById("resultado");

  let tabla = document.getElementById("tabla");

  const paintTable = () => {
    tabla.innerHTML = "";
    historial.forEach((resultado) => {
      tabla.innerHTML += `<tr>
            <td>${resultado.operacion}</td>
            <td>${resultado.resultado}</td>
        </tr>`;
    });
  };

  const ac = () => {
    labelResult.innerHTML = "";
  };

  const borrar = () => {
    if (labelResult.textContent.length > 0) {
      let cadena = labelResult.textContent.slice(0, -1);
      labelResult.innerHTML = "";
      labelResult.innerHTML = cadena;
    }
  };
  const borrarHistorial = () => {
    historial.length = 0;
    paintTable();
  };

  const agregarValor = (valor) => {
    if (!isNaN(valor) || !isNaN(labelResult.textContent.slice(-1))) {
      let operation = labelResult.textContent;
      labelResult.innerHTML = "";
      operation = operation.concat(valor);
      labelResult.innerHTML = operation;
    }
  };

  const calcularResultado = () => {
    if (!isNaN(labelResult.textContent.slice(-1))) {
      let operation = labelResult.textContent
      const calculo = eval(labelResult.textContent);
      labelResult.innerHTML = "";
      labelResult.innerHTML = calculo;
      historial.push({operacion:operation,resultado:calculo});
      paintTable();
    }
  };

  btn.addEventListener("click", () => agregarValor("0"));
  btn1.addEventListener("click", () => agregarValor("1"));
  btn2.addEventListener("click", () => agregarValor("2"));
  btn3.addEventListener("click", () => agregarValor("3"));
  btn4.addEventListener("click", () => agregarValor("4"));
  btn5.addEventListener("click", () => agregarValor("5"));
  btn6.addEventListener("click", () => agregarValor("6"));
  btn7.addEventListener("click", () => agregarValor("7"));
  btn8.addEventListener("click", () => agregarValor("8"));
  btn9.addEventListener("click", () => agregarValor("9"));
  btnSumar.addEventListener("click", () => agregarValor("+"));
  btnRestar.addEventListener("click", () => agregarValor("-"));
  btnDividir.addEventListener("click", () => agregarValor("/"));
  btnMultiplicar.addEventListener("click", () => agregarValor("*"));
  btnPunto.addEventListener("click", () => agregarValor("."));
  btnAC.addEventListener("click", ac);
  btnBorrar.addEventListener("click", borrar);
  btnBorrarHistory.addEventListener("click", borrarHistorial);
  btnIgual.addEventListener("click", calcularResultado);
})();
