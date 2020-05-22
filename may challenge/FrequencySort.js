/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const charFrequencies = createCharFrequenciesMap(s);
    charFrequencies.sort((a,b) => b.frequncy - a.frequncy);
    return createStringFromCharFrequencyMap(charFrequencies);
};

function createCharFrequenciesMap(string) {
    const charFrequenciesMap = new Map();
    for(const char of string) {
        if(!charFrequenciesMap.get(char))
            charFrequenciesMap.set(char, 1);
        else
            charFrequenciesMap.set(char, charFrequenciesMap.get(char) + 1);
    }
    const charFrequenciesArray = [];
    for(const entry of charFrequenciesMap.entries()) {
        charFrequenciesArray.push({character: entry[0], frequncy: entry[1]});
    }
    return charFrequenciesArray;
}

function createStringFromCharFrequencyMap(charFrequencies) {
    let string = '';
    for(const entry of charFrequencies)
        string += entry.character.repeat(entry.frequncy);
    return string;
}

const ttst = frequencySort('trrrreeA');
console.log(ttst);
