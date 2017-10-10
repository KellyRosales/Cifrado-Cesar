## Cifrado César


Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.


Por ejemplo:


• Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ


• Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG




Para poder resolver el problema se utilizará:


- charCodeAt(); te da la letra en cod. ASCII


- String.fromCharCode(); te devuelve la letra desde el cod ASCII


- formula para descifrar: (x + n) % 26


- formula para cifrar: (x - 65 + n)%26 + 65


### Pseudocodigo

Inicio


    Escribir (‘Ingrese la frase a encriptar’);
   

    Leer text


SI (text !=='' && text.replace(/[^0-9]/g, ' ') !== text)    ENTONCES

    cipher();

SINO

    Escribir (‘Error’);

    Escribir (‘Ingrese la frase a encriptar’);


FINSI




Función cipher (text)


    Var: textCipher = '';
   
   
    for(var i = 0; i<text.length; i++)
   
   
    var textChar = (text.charCodeAt(i) - 65 + 33)%26 + 65;
   
   
    textCipher += String.fromCharCode(textChar);
   
   
    return textCipher;

Fin-Función


Fin



Mi diagrama de flujo está en la carpeta docs