function plazoFijo() {
    let nombre = prompt("Ingrese su nombre y apellido");
  
    while (nombre == "" || nombre == " " || nombre == Number(nombre)) {
      nombre = prompt("Ingrese su nombre y apellido");
    }
  
    let edad = prompt("Ingrese su edad");
  
    while (edad != Number(edad) || edad == "" || edad == " ") {
      edad = prompt("Ingrese su edad");
    }
  
    let monto = 0; 
    let tiempo = 0;
    let interes = 0;
  
    if (edad >= 18) {
      monto = prompt("¿Cual es el monto que quiere ingresar?");
  
      while (monto < 1000000 || monto != Number(monto)) {
        monto = prompt(
          "Ingrese otro monto. Los plazos fijos no pueden ser de menos de $1.000.000 (un millon)"
        );
      }
      tiempo = prompt("Cuantos meses quiere tener su dinero en plazo fijo?");
  
      while (tiempo < 12 || tiempo != Number(tiempo)) {
        tiempo = prompt(
          "Elija otro plazo de tiempo. El plazo fijo no puede constituirse por menos de 12 meses"
        );
      }
  
      if (tiempo >= 12 && tiempo < 18) {
        interes = 102;
        alert(
          `Señor ${nombre} su plazo fijo generará un interes del ${interes}% (Mano a mano con la infla)`
        );
      } else if (tiempo >= 18 && tiempo <= 24) {
        interes = 115;
        alert(
          `Señor ${nombre} su plazo fijo generará un interes del ${interes}% (Le ganaste a la infla por poquito)`
        );
      } else if (tiempo > 24) {
        interes = 120;
        alert(
          `Señor ${nombre} su plazo fijo generará un interes del ${interes}% anualizado (Por ahora le ganas a la infla. En un año vemos)`
        );
      }
    } else {
      alert(
        `${nombre} tiene menos de 18 años. Las personas menores de 18 años no pueden solicitar plazo fijo`
      );
    }
  
    let registroIngresos = plazoFijo;
    registroIngresos = `El señor ${nombre} de ${edad} años de edad solicitó cotización por el ingreso de ${monto} en concepto de plazo fijo por ${tiempo} meses generandole un interes del ${interes}%`;
  
    console.log(registroIngresos);
  }
  