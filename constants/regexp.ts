export const nameRegexp = /[a-zA-Zа-яґєіїА-ЯҐЄІЇ0-9]{4,20}/;

export const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;

export const formatChars = {
  C: '[0-9a-zA-Z_]',
};
