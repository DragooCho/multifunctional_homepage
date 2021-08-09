const urlParseEx = (img) => {
  const parseUrl = img.split(".");
  const nameExValue = parseUrl[parseUrl.length - 1];
  return nameExValue;
};

export { urlParseEx };
