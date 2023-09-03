const defineTelephoneInputTextPaleness = (value: string): boolean => {
  return value?.split('').filter(char => char === '_').length < 9;
};

export default defineTelephoneInputTextPaleness;
