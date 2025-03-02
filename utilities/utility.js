const getConvertedTextById = (id) => {
  const text = document.getElementById(id).innerText;
  const convertedText = parseFloat(text);
  return convertedText;
};

const idFinder = (id) => {
  document.getElementById(id);
};
