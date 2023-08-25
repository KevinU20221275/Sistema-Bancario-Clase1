const depositoTexto = document.getElementById("depositoActual"),
      retiroTexto = document.getElementById("retiroActual"),
      balanceTexto = document.getElementById("balanceActual"),
      // capturar inputs
      inputDeposito = document.getElementById("depositoInput"),
      inputRetiro = document.getElementById("retiroInput"),
    //   capturar botones
      btnDeposito = document.getElementById("calcularDeposito"),
      btnRetiro = document.getElementById("calcularRetiro")
      
// agregar evento deposito

btnDeposito.addEventListener("click", (e) =>{
    const valorDeposito = inputDeposito.value
    const totalDeposito = Number(depositoTexto.innerText)+Number(valorDeposito)
    const TotalBalance = Number(balanceTexto.innerText)+Number(valorDeposito)
    depositoTexto.innerText = totalDeposito
    balanceTexto.innerHTML = TotalBalance
    inputDeposito.value = ""
});

// hacer retiros
// evento retiro
btnRetiro.addEventListener("click", (e) =>{
    const valorRetiro = inputRetiro.value;
    if (valorRetiro === 0){
        alert("No tienes nada que retirar")
        inputRetiro.value = ""
        return
    }

    if (Number(valorRetiro) > Number(balanceTexto.innerText)){
        alert("No hay dinero suficiente")
        inputRetiro.value = ""
        return
    }
    alert("Retiro Exitoso")
    const totalRetiro = Number(retiroTexto.innerText)+Number(valorRetiro)
    const TotalBalance = Number(balanceTexto.innerText)-Number(valorRetiro)
    retiroTexto.innerText = totalRetiro
    balanceTexto.innerHTML = TotalBalance
    inputRetiro.value = ""
});
