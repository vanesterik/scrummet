import { describe, expect, it } from 'vitest'

import { every } from './helpers'

describe('every', () => {
  it('should return true if all inputs are truthy', () => {
    expect(every(true, 1, 'string')).toBe(true)
  })
  it('should return false if any input is falsy', () => {
    expect(every(false, 1, 'string')).toBe(false)
  })
  it('should return false if all inputs are falsy', () => {
    expect(every(false, 0, '')).toBe(false)
  })
})

describe('some', () => {
  it('should return true if all inputs are truthy', () => {
    expect(every(true, 1, 'string')).toBe(true)
  })
  it('should return true if any input is falsy', () => {
    expect(every(false, 1, 'string')).toBe(false)
  })
  it('should return false if all input is falsy', () => {
    expect(every(false, 0, '')).toBe(false)
  })
})
