const decodeString = (str: string): string => {
  const stringArr = str.split('_');
  const decodedString = stringArr.map(code => String.fromCharCode(Number(code))).join('');
  return decodedString;
};

export default decodeString;
