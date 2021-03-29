const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.isDirect = direct
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  encrypt(word, key) {
    if(word == undefined || key == undefined) {
      throw new Error('Not implemented');
    }
    word = word.toUpperCase()
    let wordLetters = word.replace(/[^a-zA-Z]+/g, '')
    let wordPos = this.getLettersPositions(wordLetters)
    let shift = this.getShift(word, key)
    let encryptedLetters = this.encryptLetters(wordPos, shift)

    word = word.split('')
    for(let i = 0, j = 0; i < word.length; i++){
      if(/[A-Z]/.test(word[i])) {
        word[i] = encryptedLetters[j]
        j++
      }
    }
    
    return this.isDirect ? word.join('') : word.reverse().join('')
  }    
  decrypt(word, key) {
    if(word == undefined || key == undefined) {
      throw new Error('Not implemented');
    }
    word = word.toUpperCase()
    let wordLetters = word.replace(/[^a-zA-Z]+/g, '').toUpperCase()
    let wordPos = this.getEncryptedLettersPositions(wordLetters)
    let shift = this.getShift(word, key)
    let decryptedLetters = this.decryptLetters(wordPos, shift)

    word = word.split('')
    for(let i = 0, j = 0; i < word.length; i++){
      if(/[A-Z]/.test(word[i])) {
        word[i] = decryptedLetters[j]
        j++
      }
    }
    
    return this.isDirect ? word.join('') : word.reverse().join('')
  }
  getFullKey(word, key) {
    let fullKey = key
    while (fullKey.length < word.length){
      fullKey += fullKey
    }
    return fullKey.substr(0, word.length)
  }
  getShift(word, key){
    let fullKey = this.getFullKey(word, key).toLowerCase()
    let shift = []
    for (let i = 0; i < fullKey.length; i++) {
      shift.push(fullKey.charCodeAt(i) - 'a'.charCodeAt(0))
    }
    return shift
  }
  getLettersPositions(wordLetters){
    let lettersPos = []
    for (let i = 0; i < wordLetters.length; i++) {
      lettersPos.push(this.alphabet.indexOf(wordLetters[i]))
    }
    return lettersPos
  }
  getEncryptedLettersPositions(wordLetters){
    let lettersPos = []
    for (let i = 0; i < wordLetters.length; i++) {
      lettersPos.push(this.alphabet.lastIndexOf(wordLetters[i]))
    }
    return lettersPos
  }
  encryptLetters(wordPos, shift){
    let encryptedLetters = ''
    for (let i = 0; i < wordPos.length; i++) {
      encryptedLetters += (this.alphabet[wordPos[i] + shift[i]])
    }
    return encryptedLetters
  }
  decryptLetters(wordPos, shift){
    let decryptedLetters = ''
    for (let i = 0; i < wordPos.length; i++) {
      decryptedLetters += (this.alphabet[wordPos[i] - shift[i]])
    }
    return decryptedLetters
  }
}

module.exports = VigenereCipheringMachine;
