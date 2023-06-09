/**
 * 隐藏身份证
 * @param idNumber 身份证号码哦
 */
export function hideIDNumber(idNumber) {
  const hiddenChars = '*'.repeat(14);
  const prefix = idNumber.slice(0, 2);
  const suffix = idNumber.slice(-2);
  return prefix + hiddenChars + suffix;
}
/**
 * 隐藏姓名
 * @param name 姓名
 */
export function hideName(name) {
  if (name.length > 2) {
    const hiddenChars = '*'.repeat(name.length - 2);
    const firstChar = name.charAt(0);
    const lastChar = name.charAt(name.length - 1);
    return firstChar + hiddenChars + lastChar;
  } else if (name.length === 2) {
    return name.charAt(0) + '*';
  } else {
    return name;
  }
}