let encryptBtn = document.getElementById('encrypt-btn');
let eInput = document.getElementById('encryptedInput-1');
let plainInput = document.getElementById('plainInput-1');
let shiftInput = document.getElementById('shiftInput');

let inputs = [plainInput, eInput];

inputs.forEach(input => {
  input.oninput = () => {
    input.value = input.value.toUpperCase();
  };
});

function encrypt() {
  let pInputValue = plainInput.value;
  let solved = '';
  let shift = parseInt(shiftInput.value);

  for (let i = 0; i < pInputValue.length; i++) {
    let ascii = pInputValue[i].charCodeAt();

    if (ascii >= 65 && ascii <= 90) {
      let shifted = ascii + shift;
      if (shifted > 90) {
        shifted = 65 + (shifted - 91);
      }
      solved += String.fromCharCode(shifted);
    } else {
      solved += pInputValue[i];
    }
  }

  eInput.value = solved;
}

encryptBtn.onclick = encrypt;
