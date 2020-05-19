/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const AMOUNT_OF_CHARACTERS = 26;
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length)
        return false;

    const s1CharacterCountArray = createCharacterCountArray(s1);
    const s2WindowCharacterCountArray = createCharacterCountArray(s2.substring(0, s1.length));
    let matchingEntries = countMatchingEntriesInArrays(s1CharacterCountArray, s2WindowCharacterCountArray);
    if(isAnagramFound(matchingEntries))
        return true;
    
    for(let i = s1.length; i < s2.length; i++) {
        const characterRemovedFromWindow = s2[i - s1.length];
        const characterAddedToWindow = s2[i];
        if(characterRemovedFromWindow !== characterAddedToWindow) {
            const characterRemovedFromWindowIndex = characterToIndex(characterRemovedFromWindow);
            s2WindowCharacterCountArray[characterRemovedFromWindowIndex]--;
            if(s2WindowCharacterCountArray[characterRemovedFromWindowIndex] + 1 === s1CharacterCountArray[characterRemovedFromWindowIndex])
                matchingEntries--;
            else if(s2WindowCharacterCountArray[characterRemovedFromWindowIndex] === s1CharacterCountArray[characterRemovedFromWindowIndex])
                matchingEntries++;

            const characterAddedToWindowIndex = characterToIndex(characterAddedToWindow);
            s2WindowCharacterCountArray[characterAddedToWindowIndex]++;
            if(s2WindowCharacterCountArray[characterAddedToWindowIndex] - 1 === s1CharacterCountArray[characterAddedToWindowIndex])
                matchingEntries--;
            else if(s2WindowCharacterCountArray[characterAddedToWindowIndex] === s1CharacterCountArray[characterAddedToWindowIndex])
                matchingEntries++;

            if(isAnagramFound(matchingEntries))
                return true;
        }
    }
    return false;
};

function createCharacterCountArray(string) {
    const countArray = new Array(AMOUNT_OF_CHARACTERS).fill(0);
    for(character of string) {
        countArray[characterToIndex(character)]++;
    }

    return countArray;
}

function characterToIndex(character) {
    return character.charCodeAt() - 'a'.charCodeAt();
}

function countMatchingEntriesInArrays(arr1, arr2) {
    let count = 0;
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] === arr2[i])
            count++;
    }
    return count;
}

function isAnagramFound(matchingEntries) {
    return matchingEntries === AMOUNT_OF_CHARACTERS;
}

console.log(checkInclusion("ab", "eidbaooo"));
