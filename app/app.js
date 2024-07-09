function handleEncrypt() {
  const input = document.querySelector('.content__text__input')
  let newText = input.value;

  if (newText.length === 0) { return; }

  newText = newText.replaceAll("e", "enter");
  newText = newText.replaceAll("i", "imes");
  newText = newText.replaceAll("a", "ai");
  newText = newText.replaceAll("o", "ober");
  newText = newText.replaceAll("u", "ufat");
  
  const decrypt = document.querySelector('.decrypt')
  decrypt.style.gap = "16px";

  const decryptImg = document.querySelector('.decrypt__img')
  decryptImg.style.display = "none";

  const decryptTitle = document.querySelector('.decrypt__text__title')
  decryptTitle.style.display = "none";

  const text = document.querySelector('.decrypt__text')
  text.style.flex = 1;
  
  const textResult = document.querySelector('.decrypt__text__result')
  textResult.innerHTML = newText;
  textResult.style.fontSize = '1.5rem';
  
  const btn = document.querySelector('.buttons__btn--copy')
  btn.style.display = "block";
  btn.innerHTML = "Copiar";
  
}

function handleDecrypt() {
  const input = document.querySelector('.content__text__input')
  let newText = input.value;

  if (newText.length === 0) { return; }

  newText = newText.replaceAll("ufat", "u");
  newText = newText.replaceAll("ober", "o");
  newText = newText.replaceAll("ai", "a");
  newText = newText.replaceAll("imes", "i");
  newText = newText.replaceAll("enter", "e");
  
  const decrypt = document.querySelector('.decrypt')
  decrypt.style.gap = "16px";

  const decryptImg = document.querySelector('.decrypt__img')
  decryptImg.style.display = "none";

  const decryptTitle = document.querySelector('.decrypt__text__title')
  decryptTitle.style.display = "none";

  const text = document.querySelector('.decrypt__text')
  text.style.flex = 1;
  
  const textResult = document.querySelector('.decrypt__text__result')
  textResult.innerHTML = newText;
  textResult.style.fontSize = '1.5rem';
  
  const btn = document.querySelector('.buttons__btn--copy')
  btn.style.display = "block";
  btn.innerHTML = "Copiar";
}

function handleCopy() {
  const textResult = document.querySelector('.decrypt__text__result')

  navigator.clipboard.writeText(textResult.innerHTML)

  const btn = document.querySelector('.buttons__btn--copy')
  btn.innerHTML = "Copiado!";
}
