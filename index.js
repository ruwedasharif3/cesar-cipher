function caesarCipher(text, shift, isEncrypting) {
  let result = '';

  shift = shift % 26;

  for (let i = 0; i < text.length; i++) {
      let char = text[i];

      if (char >= 'a' && char <= 'z') {
          let charCode = text.charCodeAt(i);
          let shiftedCharCode = isEncrypting
              ? charCode + shift
              : charCode - shift;

          if (shiftedCharCode > 122) {
              shiftedCharCode -= 26;
          } else if (shiftedCharCode < 97) {
              shiftedCharCode += 26;
          }

          result += String.fromCharCode(shiftedCharCode);
      }
      else if (char >= 'A' && char <= 'Z') {
          let charCode = text.charCodeAt(i);
          let shiftedCharCode = isEncrypting
              ? charCode + shift
              : charCode - shift;

          if (shiftedCharCode > 90) {
              shiftedCharCode -= 26;
          } else if (shiftedCharCode < 65) {
              shiftedCharCode += 26;
          }

          result += String.fromCharCode(shiftedCharCode);
      } else {
          result += char;
      }
  }

  return result;
}

document.getElementById('encrypt-btn').addEventListener('click', function() {
  let text = document.getElementById('plainInput-1').value; 
  let shift = parseInt(document.getElementById('shiftInput').value); 

  if (isNaN(shift) || shift < 1 || shift > 25) {
      alert("Please enter a valid shift value between 1 and 25.");
      return;
  }

  let encryptedText = caesarCipher(text, shift, true);  
  document.getElementById('encryptedInput-1').value = encryptedText;  
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
  let text = document.getElementById('encryptedInput-1').value; 
  let shift = parseInt(document.getElementById('shiftInput').value); 

  if (isNaN(shift) || shift < 1 || shift > 25) {
      alert("Please enter a valid shift value between 1 and 25.");
      return;
  }

  let decryptedText = caesarCipher(text, shift, false);  
  document.getElementById('encryptedInput-1').value = decryptedText;  
});
