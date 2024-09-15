//esto agrega  a la pantalla el valordel boton de la calculadora
function agregar(valor){
    document.getElementById("pantalla").value += valor
}

// esta accion vacia la pantalla
function borrar(){
    document.getElementById("pantalla").value = ""
}

// esta accion borra
function remove(){
    var eliminar =document.getElementById("pantalla")
    eliminar.value = eliminar.value.slice(0, -1);
}

// esta accion toma el valor de la pantalla y ejecuta los calculos 
function calcular(){
    const valorPantalla=document.getElementById("pantalla").value
    const resultado = eval(valorPantalla)
    document.getElementById("pantalla").value = resultado
}
