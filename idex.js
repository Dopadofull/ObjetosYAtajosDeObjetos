//ACTIVIDAD 1 (OBJETOS)
function createObject(name, subs) {
  const persona = {
    name: name,
    suscribers: subs,
    hash: name.lenght * subs,
    getStatus: function () {
      return `El canal de ${name} tiene ${suscribers}`;
    },
  };
}


//                      (ATAJOS PARA OBJETOS)
//ACTIVIDAD 1
//En la consola no se imprime nada
//Porque en el código, especificamente en el seguno (const{}) no tiene una variable definida. 


///ACTIVIDAD 2
//La consola no imprime nada.
//Porque la variable es modificada en la septima linea del código.

//ACTIVIDAD 3
//El atajo que nos permite recuperar el valor de una propiedad es la notación de corchetes o la notción de puntos, cualquiera de los 2 es efectivo.