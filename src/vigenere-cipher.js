const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  direction;
  EN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';

  encrypt(message, key) {
    message = message.toUpperCase()
    key = key.toUpperCase()
    let shift = this.findShift(message, key)
    let encryptedMessage = []
    for (let i = 0; i < shift.length; i++) {
      if(shift[i] != '-1') {
        encryptedMessage.push(this.EN.charAt(shift[i] + this.EN.indexOf(message.charAt(i))))
      }
      else {
        encryptedMessage.push(message.charAt(i))
      }
    }

    return encryptedMessage.join('')
  }

  decrypt(encryptedMessage, key) {
    encryptedMessage = encryptedMessage.toUpperCase()
    key = key.toUpperCase()
    let shift = this.findShift(encryptedMessage, key)

    let decryptedMessage = []
    for (let i = 0; i < shift.length; i++) {
      if(shift[i] != '-1') {
        decryptedMessage.push(this.EN.charAt(this.EN.lastIndexOf(encryptedMessage.charAt(i)) - shift[i]))
      }
      else {
        decryptedMessage.push(encryptedMessage.charAt(i))
      }
    }

    return decryptedMessage.join('')
  }

  findShift(message, key) {
    const EN_ARR = this.EN.split('');
    let shift = []

    for ( ; key.length < message.length; ) {
      key += key      
    }
    key = key.substring(0, message.length).split('')

    for (let i = 0; i < key.length; i++) {
      if (EN_ARR.includes(key[i])) shift.push(parseInt(EN_ARR.indexOf(key[i])))
      else shift.push('-1')      
    }

    return shift;
  }

  constructor (direct) {
    this.direction = direct ? true : false;
  }
}

module.exports = VigenereCipheringMachine;
