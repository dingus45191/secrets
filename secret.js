const Cipher = require('rot13-cipher');


function Secure(secret){
    let secured = Cipher(secret)
    console.log(secured)
}


