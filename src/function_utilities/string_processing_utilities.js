const urlParseEx = (img) => {
  const parseUrl = img.split(".");
  const nameExValue = parseUrl[parseUrl.length - 1];
  return nameExValue;
};

const ellipsisOfWords = (sentence, numberOfCharacters) => {
  const words = sentence.slice(0, numberOfCharacters);
  return `${words}...`;
};

export { urlParseEx, ellipsisOfWords };
