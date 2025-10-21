//Declaramos las variables que vamos a usar

function calcularNota() {

    /*Declaramos las constantes y variables, en este caso he puesto constantes ya que siempre serán
    las etiquetas que tengan esos ids*/

  const BOTON_CALCULAR = document.getElementById("calcular");
  const RESULTADO = document.getElementById("resultado");
  const NOTA_INTRODUCIDA = document.getElementById("nota");

  //Añadimos el evento al botón

  BOTON_CALCULAR.addEventListener("click", calcularNota());

  //Luego voy a eliminar los espacios en blanco y ha pasar el texto a número

  let notaSinEspacios = NOTA_INTRODUCIDA.value.trim();
  let notaNumerica = parseFloat(notaSinEspacios);

  //Procedo a crear las validaciones

  //Si no es un número, mostrará un mensaje de error

  if (NaN(notaNumerica)){
    RESULTADO.textContent = 'ERROR: Debes introducir un número válido.'
    return;
  }

  //Aquí verificamos si el número que nos ha ofrecido es del 1 al 10, si no, mensaje de error.

  if (notaNumerica < 0 || notaNumerica > 10){
    RESULTADO.textContent = 'ERROR: Debes introducir un número entre el 0 y el 10.'
    return;
  }

  //Declaramos una variable que cambiará dependiendo de la nota que haya sacado.

  let calificacionObtenida = '';

  if (notaNumerica < 5){
    calificacionObtenida = 'Suspenso';
  } else if (notaNumerica < 6){
    calificacionObtenida = 'Aprobado';
  } else if (notaNumerica < 7){
    calificacionObtenida = 'Bien';
  } else if (notaNumerica < 9) {
    calificacionObtenida = 'Notable';
  } else {
    calificacionObtenida = 'Sobresaliente';
  }

  //Mostramos un mensaje con la calificación obtenida

  RESULTADO.textContent = `Has obtenido un ${calificacionObtenida}.`

}
