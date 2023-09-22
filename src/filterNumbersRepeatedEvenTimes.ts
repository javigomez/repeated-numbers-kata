export function filterNumbersRepeatedEvenTimes(numbers:null|number[]) : number[] {
    if (!numbers) return []

    let numbersRepeatedEvenTimes: number[] = []

    numbers.forEach((number) => {
        if (haventBeenCheckedAlready(numbersRepeatedEvenTimes, number)
            && appearsOddTimes(number, numbers)) {
            numbersRepeatedEvenTimes.push(number)
        }
    })

    return numbersRepeatedEvenTimes
}

const appearsOddTimes = (number: number, numbers: number[]) => {
    function countAppearances(number: number, numbers: number[]) {
        return numbers.filter((eachNumber) => eachNumber === number).length;
    }

    const appearances = countAppearances(number, numbers);
    return appearances % 2 === 1;
}

const haventBeenCheckedAlready = (numbersRepeatedEvenTimes: number[], number: number) =>  {
    return !numbersRepeatedEvenTimes.includes(number);
}
