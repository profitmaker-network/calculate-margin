import {calculate_margin} from './calculate_margin'


it('Calculate_margin: buy 100, sell 120 ', () => {
  const result = calculate_margin(100,120)
  expect(result).toBe(20)
})
it('Calculate_margin: buy 100 then sell 80', () => {
  const result = calculate_margin(100,80)
  expect(result).toBe(-20)
})
