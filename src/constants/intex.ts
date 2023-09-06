export const checkbox: {
  label: string;
  type: 'upperCase' | 'symbols' | 'number';
}[] = [
  { label: 'Incluir mayuscular', type: 'upperCase' },
  { label: 'Incluir números', type: 'number' },
  { label: 'Incluir caracteres especiales', type: 'symbols' }
];

export const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const numbersChars = '0123456789';
export const symbolsChars = '!@#$%^&*()_+[]{}|;:,.<>?';
