export const makeId = (length) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
  const characterLength = characters.length;

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * characterLength));
  }
  return result;
};
