//Validaciones

var text = prompt('Ingrese la frase a encriptar');
if(text !== '' && text.replace(/[^0-9]/g, ' ') !== text){ // si el texto es diferente de 0, o si ingresa algun valor númerico lo reemplaza por vacio y vuelve a llamar al prompt
  cipher(text); //llamamos a la funcion a ejecutar
}
else{
  alert('Error vuelva a ingresar la frase'); //si lo anterior no se cumple, se llamara nuevamente al prompt
  var text = prompt('Ingrese la frase a encriptar');
}  

//Tratando de avanzar la funcion
function cipher(text){
    for(var i = 0; i<text.length; i++){
      var textCipher = (i - 65 + 33)%26 + 65;
    }
    return textCipher;
  }
  
  function decipher(){
    
  }