function isIsogram(str) {
    let letters = str.toLowerCase().split('')
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters.length; j++) {
            if (letters[i] === letters[j] &&
                i !== j &&
                letters[i] !== ' ' &&
                letters[i] !== '-') {
                return false
            }
        }
    }
    return true
}

export default isIsogram;
