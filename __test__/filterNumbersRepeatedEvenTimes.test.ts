// El ejercicio consiste en filtrar una lista de números,
// quedándonos con aquellos que aparezcan un número de
// veces impar en dicha lista.
// Es una función que recibe una lista y devuelve otra lista.

import { filterNumbersRepeatedEvenTimes } from '../src/filterNumbersRepeatedEvenTimes';

// given [] should return []
// given [1,1] should return []
// given [1, 2] should return [1, 2]
// given [1, 2, 1] should return [2]
// given [1, 2, 1, 2] should return []
// given [1, 2, 1, 2, 1] should return [1]
// given [1, 2, 1, 2, 1, 2] should return [1, 2]
// given [1, 2, 1, 2, 1, 2, 1] should return [2]
// given [1, 2, 1, 2, 1, 2, 1, 2] should return []

describe('filterNumbersRepeatedEvenTimes', () => {
  it('chooses these numbers that are repeated even times', () => {
    expect(filterNumbersRepeatedEvenTimes(null)).toEqual([]);
    expect(filterNumbersRepeatedEvenTimes([])).toEqual([]);
    expect(filterNumbersRepeatedEvenTimes([1])).toEqual([1]);
    expect(filterNumbersRepeatedEvenTimes([1,2])).toEqual([1,2]);
    expect(filterNumbersRepeatedEvenTimes([2,2])).toEqual([]);
    expect(filterNumbersRepeatedEvenTimes([2,2,1])).toEqual([1]);
    expect(filterNumbersRepeatedEvenTimes([2,2,1,2])).toEqual([2,1]);
    expect(filterNumbersRepeatedEvenTimes([1,2,3,1,2])).toEqual([3]);
  });
});
