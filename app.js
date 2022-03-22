const getRandomLow = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUp = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomNum = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomSym = () => {
  const symbols = '!?=@+-*/&%';
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomFunc = { getRandomLow, getRandomUp, getRandomNum, getRandomSym };

const generatePassword = () => {
  const length = 20;
  let password = '';
  for (let i = 0; i < length; i++) {
    password += Object.values(randomFunc)[Math.floor(Math.random() * 4)]();
  }
  return password;
};

const result = document.getElementById('result');
const generate = document.getElementById('generate');
const copy = document.getElementById('copy');

generate.addEventListener('click', () => {
  result.innerText = generatePassword();
});

copy.addEventListener('click', () => {
  const copyPassword = result.innerText;
  if (!copyPassword) {
    return;
  } else {
    const text = document.createElement('textarea');
    text.value = copyPassword;
    document.body.appendChild(text);
    text.select();
    document.execCommand('copy');
    text.remove();
    alert('The password successfully copied!');
  }
});
