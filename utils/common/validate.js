
const convertTo18IDCard = (idCard) => {
  const idCard17 = idCard.substring(0, 17);
  const weight = [
    7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2
  ];
  const checkDigit = [
    '1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'
  ];

  let sum = 0;
  for (let i = 0; i < 17; i++) {
    sum += parseInt(idCard17.charAt(i)) * weight[i];
  }

  const remainder = sum % 11;
  return idCard17 + checkDigit[remainder];
};

const verifyChecksum = (idCard) => {
  const weight = [
    7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2
  ];
  const checkDigit = [
    '1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'
  ];

  let sum = 0;
  for (let i = 0; i < 17; i++) {
    sum += parseInt(idCard.charAt(i)) * weight[i];
  }

  const remainder = sum % 11;
  const lastDigit = idCard.charAt(17);
  
  return lastDigit.toUpperCase() === checkDigit[remainder];
};


export function validateName(name) {
  // 使用正则表达式匹配中文字符
  const reg = /^[\u4e00-\u9fa5]{2,}$/;
  return reg.test(name)
}
export const validateIDCard = (idCard) => {
  const reg = /(^\d{17}(\d|X|x)$)|(^\d{15}$)/;

  if (reg.test(idCard)) {
    if (idCard.length === 15) {
      idCard = convertTo18IDCard(idCard);
    }

    if (verifyChecksum(idCard)) {
      return true;
    }
  }

  return false;
};
