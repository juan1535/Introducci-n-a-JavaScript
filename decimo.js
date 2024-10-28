function generarPiramide(niveles) {
    for (let i = 1; i <= niveles; i++) {

        let espacios = ' '.repeat(niveles - i);

      let asteriscos = '*'.repeat(2 * i - 1);
      console.log(espacios + asteriscos);
    }
  }
  
generarPiramide(5);  