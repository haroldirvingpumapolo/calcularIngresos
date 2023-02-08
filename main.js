let arrayGastos = []
let resultadoTotal = document.querySelector("#resultado")
let presupuestoValor;


function guardarPresupuesto(){
  let mostrarPresupuesto = document.getElementById("mostrarPresupuesto")
  let presupuesto = document.querySelector("#presupuestoId").value
  presupuestoValor = (presupuesto)
  mostrarPresupuesto.innerHTML+=`<div>${presupuesto}</div>`
}
function guardarCosto(){
  let nombreValor = document.querySelector("#nombreGastoId").value
  let gastoValor = document.querySelector("#costoGastoId").value
  let valor={nombre:nombreValor,gasto:gastoValor}
  arrayGastos.push(valor)
  resultadoTotal.innerHTML +=`<div>${gastoValor}</div>`
}

function calcular(){
  
  let resultado = 0
  arrayGastos.map( v => resultado += parseInt(v.gasto))
  let valorResultadoTotal = presupuestoValor - resultado
  resultadoTotal.innerHTML +=`<div>El Residuo es : ${valorResultadoTotal}</div>`
}
