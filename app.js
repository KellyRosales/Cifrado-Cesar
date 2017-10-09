//Validaciones

var text = prompt('Ingrese la frase a encriptar');
if(text !== 0 && text !== ' '){
  cipher();
}
else{
  'Error vuelva a ingresar la frase'
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