export function validatePassword(password: string): { isValid: boolean; message: string } {
  if (password.length < 8) {
    return { isValid: false, message: '密码长度至少为8个字符' };
  }

  if (!/[A-Z]/.test(password)) {
    return { isValid: false, message: '密码必须包含至少一个大写字母' };
  }

  if (!/[a-z]/.test(password)) {
    return { isValid: false, message: '密码必须包含至少一个小写字母' };
  }

  if (!/[0-9]/.test(password)) {
    return { isValid: false, message: '密码必须包含至少一个数字' };
  }

  return { isValid: true, message: '' };
}
