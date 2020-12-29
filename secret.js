const Cipher = require('rot13-cipher');

var secret= 'Secret'
coded= Cipher(secret)
console.log(coded)
