import { describe, it, expect } from '@/tests/utils/index'

import { round } from "~/utils/math";

describe('round', () => {
  it('Округлить число 10.3423 до 10', () => {
    expect(round(10.3423)).toBe('10')
  })

  it('Округлить строку 12.5423 до 12', () => {
    expect(round(12.5423)).toBe('13')
  })

  it('Передать пустое значение (undefined, null) и получить пустую строку', () => {
    expect(round(undefined)).toBe('')
    expect(round(null)).toBe('')
  })
})