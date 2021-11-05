import { stringLength, reverseString } from '../string-length';

describe('Testing Practice', () => {
  test('string length function', () => {
    expect(stringLength('string')).toEqual(6)
  })

  test('should for when function recieves empty string', () => {
    expect(stringLength('')).toBe('string should have at least one character')
  })

  test('should for when function recieves string longer than 10', () => {
    expect(stringLength('IamthebestatwhatIdo')).toBe('string should have at least one character')
  })

  test('should reverse a string', () => {
    expect(reverseString('IamthebestatwhatIdo')).toBe('odItahwtatsebehtmaI')
  })
})
